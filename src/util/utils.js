exports.toTitleCase = str => str.charAt(0).toUpperCase() + str.slice(1);

exports.randomArray = arr => arr[Math.floor(Math.random() * arr.length)];

exports.random = (n1, n2) => Math.floor(Math.random() * (n2 - n1)) + n1;

exports.regex = {
	role: /^(?:<@​&)?(\d{17,19})>?$/
};
