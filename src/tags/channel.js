module.exports = {
	name: 'channel',
	run: ctx => (ctx.channel ? ctx.channel.toString() : 'No channel passed to context.')
};
