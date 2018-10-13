const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setType(['argslen', 'args', 'arguments'])
	.setDescription('Prints the number of arguments provided.')
	.hasAction(false)
	.setProcess(data => data.args.length);
