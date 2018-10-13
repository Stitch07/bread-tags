const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setType(['uppercase'])
	.setDescription('Converts input into uppercase.')
	.hasAction(false)
	.setProcess(data => data.value[0].toUpperCase());
