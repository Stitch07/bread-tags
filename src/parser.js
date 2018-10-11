const tagBuilders = require('./tags');
const XRegExp = require('xregexp');

module.exports = class TagsParser {

	constructor(options = {}) {
		this.tags = tagBuilders;
		this.argRegex = /arg\d/g;
		this.tagArgRegex = /{arg\d}/g;
		if (options.disabledTags) {
			for (const tag of options.disabledTags) this.tags.delete(tag);
		}
	}

	get(tag) {
		// eslint-disable-next-line id-length
		const tg = Array.from(this.tags).find(t => t[1].type.includes(tag));
		return tg ? tg[1] : null;
	}

	async parse(input, data) {
		const tags = XRegExp.matchRecursive(input, '{', '}', 'gi');
		input = this.replaceArg(input, data.args);
		for (const tag of tags) {
			let [name, value] = tag.split(':'); // eslint-disable-line prefer-const
			if (value) value = this.replaceArg(value, data.args);
			const built = this.get(name);
			if (!built) continue;
			if (!value && built.args > 0) throw `The tag ${built.type[0]} expects at least **${built.args}** value(s).`;
			input = await built.onUse(input, {
				tagString: `{${name}${value ? `:${value}` : ''}}`,
				value,
				...data
			});
		}
		return input;
	}

	replaceArg(string, args) {
		string = string.replace(/{arg\d}|arg\d/g, arg => {
			const [, index] = arg.split('arg');
			return args[Number(index.replace(/}/g, '')) - 1];
		});
		return string;
	}

	static loadTag(tags) {
		if (Array.isArray(tags)) for (const tag of tags) tagBuilders.set(tag.type[0], tag);
		tagBuilders.set(tags.type[0], tags);
	}

};
