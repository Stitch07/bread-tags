const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setType(['args', 'arguments'])
	.setDescription('Prints a list of arguments provided.')
	.hasAction(false)
	.setProcess(data => JSON.stringify(data.args || []));
