exports.toTitleCase = str => str.charAt(0).toUpperCase() + str.slice(1);

exports.regex = {
	role: /^(?:<@​&)?(\d{17,19})>?$/
};
