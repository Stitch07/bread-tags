const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Sends the message channel\'s id.')
	.setType('channelid')
	.hasAction(false)
	.setProcess(data => data.channel.toString());
