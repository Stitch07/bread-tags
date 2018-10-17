// sets a variable to use in a tag
const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setType('set')
	.setDescription('Sets a variable that can be used later in a tag.')
	.requiredArgs(2)
	.hasAction()
	.setProcess(ctx => {
		const [key, value] = ctx.value;
		ctx.addVar(key, value);
	});
