module.exports = {
	name: 'lowercase',
	run: ctx => {
		if (!ctx.value) throw new Error('No value passed to lowercase.');
		return ctx.value.toLowerCase();
	}
};
