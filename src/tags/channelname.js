const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Sends the message channel\'s name.')
	.setType('channelname')
	.hasAction(false)
	.setProcess(data => data.channel.name);
