const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('Adds a role to a user.')
	.setType(['roleadd', 'addrole'])
	.requiredArgs(1)
	.hasAction()
	.setProcess(data => {
		if (!data.value) throw 'You need to provide a role ID to add separated by a colon. Example: {roleadd:1111111111}';
		if (!data.guild.roles.has(data.value)) throw 'An invalid role was provided. Make sure you provide a valid role ID.';
		return data.member.roles.add(data.value);
	});
