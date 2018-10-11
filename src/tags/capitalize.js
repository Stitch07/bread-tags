const TagBuilder = require('../Builder');
const { toTitleCase } = require('../util/utils');

module.exports = new TagBuilder()
	.setType(['capitalize', 'capitalise'])
	.requiredArgs(1)
	.setDescription('Capitalizes a word or a group of words.')
	.hasAction(false)
	.setProcess(ctx => ctx.value.split(' ').map(word => toTitleCase(word)).join(' '));
