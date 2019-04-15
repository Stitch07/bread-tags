module.exports = {
	name: 'channelid',
	run: ctx => (ctx.channel ? ctx.channel.id : 'No channel passed to context.')
};
