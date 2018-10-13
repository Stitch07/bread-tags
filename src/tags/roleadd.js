const TagBuilder = require('../Builder');
const { regex } = require('../util/utils');

module.exports = new TagBuilder()
	.setDescription('Adds a role to a user.')
	.setType(['roleadd', 'addrole'])
	.requiredArgs(1)
	.hasAction()
	.setProcess(data => {
		if (!data.value) throw 'You need to provide a role ID to add separated by a colon. Example: {roleadd:1111111111}';
		let role;
		if (regex.role.test(data.value)) {
			role = data.guild.roles.get(data.value);
		} else {
			role = data.guild.roles.find(rol => rol.name === data.value);
		}
		if (!role) throw 'Invalid role. Please provide a valid role name or ID.';
		return data.member.roles.add(data.value);
	});
