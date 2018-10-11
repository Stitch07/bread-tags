const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Returns the server name.')
	.setType(['server', 'servername', 'guild', 'guildname'])
	.hasAction(false)
	.setProcess(data => data.guild.name);
