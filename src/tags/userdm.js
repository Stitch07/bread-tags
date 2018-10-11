const TagBuilder = require('../Builder');

module.exports = new TagBuilder()
	.setDescription('DMs the user the chosen text.')
	.setType(['dmuser', 'userdm'])
	.hasAction()
	.requiredArgs(0)
	.setProcess(async data => {
		try {
			await data.user.send(data.value);
		} catch (error) {
			throw 'You have DMs blocked!';
		}
	});
