const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Sends the message author\'s id.')
	.setType(['userid', 'authorid'])
	.hasAction(false)
	.setProcess(data => data.user.id);
