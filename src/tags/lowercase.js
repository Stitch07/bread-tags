const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setType(['lowercase'])
	.setDescription('Converts input into lowercase.')
	.hasAction(false)
	.setProcess(data => data.value[0].toLowerCase());
