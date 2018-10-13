const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Floor the number provided.')
	.setType(['floor', 'rounddown'])
	.hasAction(false)
	.setProcess(data => Math.floor(Number(data.value[0])));
