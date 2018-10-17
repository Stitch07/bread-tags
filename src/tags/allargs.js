const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setType(['allargs'])
	.setDescription('Sends all surprised arguments, separated by spaces.')
	.hasAction(false)
	.setProcess(data => {
		return data.args.length ? data.args.join(' ') : 'No arguments supplied.';
	});
