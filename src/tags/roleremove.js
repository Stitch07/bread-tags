const TagBuilder = require('../Builder');
const { regex } = require('../util/utils');

module.exports = new TagBuilder()
	.setDescription('Adds a role from a user.')
	.setType(['roleremove', 'removerole'])
	.requiredArgs(1)
	.hasAction()
	.setProcess(data => {
		const [rolename] = data.value;
		let role;
		if (regex.role.test(rolename)) {
			role = data.guild.roles.get(rolename);
		} else {
			role = data.guild.roles.find(rol => rol.name === rolename);
		}
		if (!role) throw 'Invalid role. Please provide a valid role name or ID.';
		return data.member.roles.remove(role);
	});
