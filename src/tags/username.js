const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Sends the message author\'s username.')
	.setType(['username', 'authorname'])
	.hasAction(false)
	.setProcess(data => data.user.username);
