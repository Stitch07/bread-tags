const fs = require('fs');
const path = require('path');
const scan = require('./scan.js');
const { TYPES: { CHAR } } = require('./constants.js');

module.exports = class Parser {
	constructor() {
		this.tags = new Map();
		this.loadAll(path.join(__dirname, 'tags'));
	}

	async parse(source, context) {
		let output = '';
		const tokens = scan(source);
		const runTag = node => {
			let name;
			let value;
			if (node.child) {
				name = node.text.split(':')[0];
				value = runTag(node.child);
			} else {
				[name, value] = node.text.split(':');
			}

			const tag = this.tags.get(name);
			value = value || '';
			if (!tag) return `{${name}:${value}}`;
			try {
				return tag.run({ value, ...context }) || '';
			} catch (error) {
				return `An error occurred while executing the tag ${name}: \`${error}\``;
			}
		};


		for (const token of tokens) {
			if (token.type === CHAR) output += token.text;
			else output += await runTag(token);
		}

		return output;
	}

	remove(...tags) {
		for (const tag of tags) this.tags.delete(tag);
	}

	loadAll(dir) {
		const files = fs.readdirSync(dir);
		for (const file of files) this.load(require(`${dir}/${file}`));
	}

	load(tag) {
		this.tags.set(tag.name, tag);
		if (tag.aliases) {
			for (const alias of tag.aliases) this.tags.set(alias, tag);
		}
	}
};
