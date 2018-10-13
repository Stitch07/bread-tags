const TagBuilder = require('../Builder');
const { random } = require('../util/utils');

module.exports = new TagBuilder()
	.setDescription('Sends .')
	.setType('range')
	.hasAction(false)

	.setProcess(data => {
		const [first, second] = data.value[0].split('-');
		if (!first || !second) throw 'You must specify 2 valid numbers - separated by hyphens.';
		return random(Number(first), Number(second));
	});
