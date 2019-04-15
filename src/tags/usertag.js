module.exports = {
	name: 'user',
	run: ctx => (ctx.user ? ctx.user.tag : 'No user passed to context.')
};
