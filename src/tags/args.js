module.exports = {
	aliases: ['allargs'],
	name: 'args',
	run: ctx => {
		if (!ctx.args || !ctx.args.length) throw 'no arguments provided.';
		return ctx.args.join(', ');
	}
};
