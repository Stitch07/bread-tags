const fs = require('fs');

const out = {};

for (const file of fs.readdirSync(__dirname)) {
	if (file.includes('index')) continue;
	out[file.split('.')[0]] = require(`./${file}`);
}

module.exports = new Map(Object.entries(out));
