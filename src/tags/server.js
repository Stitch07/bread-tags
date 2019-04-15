module.exports = {
	aliases: ['servername'],
	name: 'server',
	run: ctx => (ctx.guild ? ctx.guild.toString() : 'No server passed to context.')
};
