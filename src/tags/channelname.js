module.exports = {
	name: 'channelname',
	run: ctx => (ctx.channel ? ctx.channel.name : 'No channel passed to context.')
};
