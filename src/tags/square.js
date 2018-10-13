const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Squares the number provided.')
	.setType(['square', 'sqr'])
	.hasAction(false)
	.setProcess(data => Number(data.value[0]) ** 2);
