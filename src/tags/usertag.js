const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Sends the message author\'s tag.')
	.setType(['usertag', 'authortag'])
	.hasAction(false)
	.setProcess(data => data.user.tag);
