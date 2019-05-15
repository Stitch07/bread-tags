module.exports = {
	name: 'usertag',
	run: ctx => (ctx.user ? ctx.user.tag : 'No user passed to context.')
};
