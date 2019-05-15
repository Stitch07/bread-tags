const test = require('ava');
const parser = new (require('../src'))();

test('basic parsing', async t => {
	const expected = 'this is a TEST';
	t.is(await parser.parse('this is a {uppercase:{args}}', { args: ['test'] }), expected);
});

test('not nested', async t => {
	const expected = 'this is another TEST';
	t.is(await parser.parse('this is another {uppercase:test}'), expected);
});

test('choices', async t => {
	const expected = ['apples', 'oranges', 'bananas'];
	const parsed = await parser.parse('{choose:apples;oranges;bananas}');
	t.true(expected.includes(parsed));
});

test('range', async t => {
	const range = Number.parseInt(await parser.parse('{range:1;10}'), 10);
	t.true(range <= 10 && range >= 1);
});

// titlecase is an alias for capitalize
test('aliases', async t => {
	const expected = 'Stitch';
	t.is(await parser.parse('{titlecase:stitch}'), expected);
});

test('actual sentences', async t => {
	const expected = 'this is a big sentence, Stitch, so big';
	t.is(await parser.parse('this is a big sentence, {titlecase:Stitch}, so big'), expected);
});
