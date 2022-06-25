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
				"A long-held secret is revealed, causing guilt about what your characters did long ago.",
				"Your character wakes up in their bathtub with their clothes still on. There’s blood on their shirt.",
				"Jupiter is going to crash into earth.",
				"Your character wakes up in a dumpster 30 miles outside of town.",
				"The government announces the chipping of all citizens.",
				"Two characters discover they’re long-lost siblings.",
				"One character poisoned another character early in the book. The poison is starting to take effect.",
				"A secondary character has been dead all along.",
				"The entire plot is a ruse to teach your character a lesson.",
				"Your narrator is unreliable—much of what they’ve portrayed never happened.",
				"The protagonist is the villain.",
				"A close friend betrays your character.",
				"Switch perspectives.",
				"Introduce a prophecy.",
				"Flashback to a traumatic event. How is it effecting things now?",
				"It turns out one of your human characters is a vampire.",
				"A character discovers the people they believed to be their parents actually kidnapped them.",
				"A character is a manifestation of the narrator’s subconscious.",
				"The entire plot has been a long con to swindle someone out of money.",
				"The book is a brainwashing tool by the government.",
				"The main characters are all using each other.",
				"Someone is not who they appear to be.",
				"Mix mediums. Include a poem, song, artwork, script, court transcription, email, or text.",
				"Your protagonist must face their greatest fear—make it something mundane, like bra shopping or butterflies.",
				"The protagonist and antagonist fall in love.",
				"Someone does something slightly inconsiderate to the protagonist, which sends them down a dark thought spiral.",
				"A secondary character is presented with a choice that could alter the fates of everyone involved.",
				"The protagonist gets paralyzed. They must watch and listen as the world happens around them.",
				"A character previously thought dead returns.",
				"Characters who do not like each other are forced to band together for a common goal.",
				"Characters who do not like each other are forced to share a small living space.",
				"Someone loses their job.",
				"The answer to the big question is in the book one of the characters was reading.",
				"A previously useless special ability becomes vital.",
				"A villain turns out to be good.",
				"Kill someone off.",
				"The characters are inducted into a secret society.",
				"A dream saves someone.",
				"Give the protagonist anonymous help—that turns out to be from a sworn enemy.",
				"Escalate tension until a full-blown fight breaks out.",
				"Remove the characters from the situation.",
				"An assumption of something basic (gender, race, class, religion, interests, history, etc.) has been guiding the way your protagonist interacts with someone. When they discover the truth, their world is shaken.",
			];
		var number = Math.floor(Math.random() * prompt_array.length);
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
			case 'prompt':
			bot.sendMessage({
				to: channelID,
				message: String(prompt)
			});
		}
	}
});
