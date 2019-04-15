const { regex } = require('../util/utils.js');

module.exports = {
	aliases: ['addrole'],
	name: 'roleadd',
	run: ctx => {
		const [rolename] = ctx.value;
		if (!rolename) throw 'You need to provide a role ID to add separated by a colon. Example: {roleadd:1111111111}';
		let role;
		if (regex.role.test(rolename)) {
			role = ctx.guild.roles.get(rolename);
		} else {
			role = ctx.guild.roles.find(rol => rol.name === rolename);
		}
		if (!role) throw 'Invalid role. Please provide a valid role name or ID.';
		return ctx.member.roles.add(role);
	}
};
