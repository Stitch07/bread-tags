module.exports = {
	aliases: ['choice'],
	name: 'choose',
	run: ctx => {
		if (!ctx.value) throw 'no choices provided';
		const choices = ctx.value.split(';');
		return choices[Math.floor(Math.random() * choices.length)];
	}
};
