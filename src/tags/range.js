module.exports = {
	name: 'range',
	run: ctx => {
		const [min, max] = ctx.value.split(';');
		return Math.floor(Math.random() * Number.parseInt(max, 10)) + Number.parseInt(min, 10);
	}
};
