var Discord = require('discord.io');
var logger = require('winston');
//var auth = require('./auth.json');
const auth = process.env.token;
console.log(auth);
let key = { "token": auth};
console.log(key);
// configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
colorize: true});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
	token: auth,
	autorun:true
});
bot.on('message', function (user, userID, channelID, message, evt) {
	// Our bot needs to know if it will execute a command
	// It will listen for messages that will start with '!'
	if (message.substring(0,1) == '!') {
		const prompt_array = [
				"here is the first prompt",
				"here is the second prompt",
				"here is the third prompt"
			];
		var number = Math.floor(Math.random() * 2);
		var prompt = prompt_array[number];
		var args = message.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1);
		switch(cmd) {
			// !ping
			case 'ping':
			bot.sendMessage({
				to: channelID,
				message: 'pong!'
			});
			break;
			case '!prompt':
			bot.sendMessage({
				to: channelID,
				message: String(prompt)
			});
		}
	}
});
