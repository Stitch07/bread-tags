module.exports = class TagBuilder {

	constructor() {
		this.type = [];
		this.description = null;
		this.action = null;
		this.args = 0;
		this.process = null;
	}

	setType(type) {
		if (Array.isArray(type)) this.type = this.type.concat(type);
		else this.type.push(type);
		return this;
	}

	setDescription(description) {
		this.description = description;
		return this;
	}

	hasAction(action = true) {
		this.action = action;
		return this;
	}

	requiredArgs(num) {
		this.args = num;
		return this;
	}

	setProcess(fn, thisArg) {
		if (thisArg) fn = fn.bind(thisArg);
		this.process = fn;
		return this;
	}

	async onUse(input, data) {
		if (this.action) {
			try {
				await this.process(data);
				input = '';
			} catch (error) {
				throw `An error occured while executing this tag: \`${error.toString()}\`.`;
			}
		} else {
			try {
				input = await this.process(data);
			} catch (error) {
				throw `An error occured while executing this tag: \`${error.toString()}\`.`;
			}
		}
		return input;
	}

};
