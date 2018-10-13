const TagBuilder = require('../Builder');
const { randomArray } = require('../util/utils');

module.exports = new TagBuilder()
	.setType(['choose', 'choice', 'choices'])
	.setDescription('Returns a random choice from the given values.')
	.requiredArgs(2)
	.hasAction(false)
	.setProcess(data => !data.value.length ? 'No values specified' : randomArray(data.value));
