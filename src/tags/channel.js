const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Sends the message channel\'s mention.')
	.setType('channel')
	.hasAction(false)
	.setProcess(data => data.channel.toString());
