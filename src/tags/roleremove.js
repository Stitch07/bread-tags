const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Adds a role from a user.')
	.setType(['roleremove', 'removerole'])
	.requiredArgs(1)
	.hasAction()
	.setProcess(data => {
		if (!data.guild.roles.has(data.value)) throw 'An invalid role was provided. Make sure you provide a valid role ID.';
		return data.member.roles.remove(data.value);
	});
