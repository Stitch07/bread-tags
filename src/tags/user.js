const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Mentions the message author..')
	.setType(['user', 'author', 'usermention'])
	.hasAction(false)
	.setProcess(data => data.user.toString());
