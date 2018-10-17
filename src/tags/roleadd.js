const TagBuilder = require('../Builder');
const { regex } = require('../util/utils');

module.exports = new TagBuilder()
	.setDescription('Adds a role to a user.')
	.setType(['roleadd', 'addrole'])
	.requiredArgs(1)
	.hasAction()
	.setProcess(data => {
		const [rolename] = data.value;
		if (!rolename) throw 'You need to provide a role ID to add separated by a colon. Example: {roleadd:1111111111}';
		let role;
		if (regex.role.test(rolename)) {
			role = data.guild.roles.get(rolename);
		} else {
			role = data.guild.roles.find(rol => rol.name === rolename);
		}
		if (!role) throw 'Invalid role. Please provide a valid role name or ID.';
		return data.member.roles.add(role);
	});
