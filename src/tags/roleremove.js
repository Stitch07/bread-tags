const TagBuilder = require('../Builder');
const { regex } = require('../util/utils');

module.exports = new TagBuilder()
	.setDescription('Adds a role from a user.')
	.setType(['roleremove', 'removerole'])
	.requiredArgs(1)
	.hasAction()
	.setProcess(data => {
		let role;
		if (regex.role.test(data.value)) {
			role = data.guild.roles.get(data.value);
		} else {
			role = data.guild.roles.find(rol => rol.name === data.value);
		}
		if (!role) throw 'Invalid role. Please provide a valid role name or ID.';
		return data.member.roles.remove(role);
	});
