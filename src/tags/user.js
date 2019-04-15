module.exports = {
	aliases: ['usermention'],
	name: 'user',
	run: ctx => (ctx.user ? ctx.user.toString() : 'No user passed to context.')
};
