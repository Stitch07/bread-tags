const tagBuilders = require('./tags');
const XRegExp = require('xregexp');

// Regex for {name:param}
const funcRegex = /{(.*?\S(:).*?\S)}/gi;
// Splits the tag only at the first colon (URL colon foolproofing)
const splitRegex = /:(.+)?/gi;

const matchRecursive = str => XRegExp.matchRecursive(str, '{', '}', 'gi');

module.exports = class TagsParser {

	constructor(options = {}) {
		this.errorLogging = options.errorLogging;
		this.throwErrors = options.throwErrors;
		this.tags = tagBuilders;
		if (options.disabledTags) {
			for (const tag of options.disabledTags) this.tags.delete(tag);
		}
	}

	get(tag) {
		// eslint-disable-next-line id-length
		const tg = Array.from(this.tags).find(t => t[1].type.includes(tag));
		return tg ? tg[1] : null;
	}

	async parse(input, data = { args: [] }, cb) {
		input = this.replaceArg(input, data.args);
		let tags = matchRecursive(input);
		if (!tags) return null;
		tags = tags.map(tg => `{${tg}}`);
		let parsedString = input;
		for (const tag of tags) {
			let stripped = tag.slice(1, -1);

			if (matchRecursive(stripped)) {
				await this.parse(stripped, data, newString => {
					stripped = newString;
				});
			}

			const tagDef = {
				raw: stripped,
				name: tag.match(funcRegex) !== null ? String(stripped.split(splitRegex).splice(0, 1)) : stripped,
				func: tag.match(funcRegex) !== null ? stripped.split(splitRegex).splice(1, 1)[0].split('|') : []
				// Arguments are separated by pipes which calls for an another split
				// The arguments are in an array from which the name is extracted, hence using the 0th element
			};

			let result;
			try {
				const built = this.get(tagDef.name.toLowerCase());
				if (!built) {
					result = tag;
				} else {
					if (built.args > tagDef.func.length) throw `At least **${built.args}** values are required to use this tag. Separate values by |.`;
					result = await built.onUse(parsedString, { value: tagDef.func, ...data });
				}
			} catch (error) {
				if (this.errorLogging) console.error(error);
				if (this.throwErrors) throw error;
				result = tag;
			}
			// Replace tags in the parsed string
			parsedString = parsedString.replace(tag, result);
		}
		if (cb) return cb(parsedString);
		else return parsedString;
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
