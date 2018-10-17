// gets a previously set variable
const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setType('get')
	.setDescription('Gets a previously set variable.')
	.requiredArgs(1)
	.hasAction(false)
	.setProcess(ctx => {
		const [key] = ctx.value;
		return ctx.getVar(key);
	});
