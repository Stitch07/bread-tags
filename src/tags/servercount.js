const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Returns the member count of the server.')
	.setType(['membercount', 'servercount', 'guildcount'])
	.hasAction(false)
	.setProcess(data => data.guild.memberCount);
