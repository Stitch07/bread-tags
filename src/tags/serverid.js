const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Returns the server ID.')
	.setType(['serverid', 'guildid'])
	.hasAction(false)
	.setProcess(data => data.guild.id);
