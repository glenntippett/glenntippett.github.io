var jokes = [
	'Today, my son asked "Can I have a book mark?" and I burst into tears. 11 years old and he still doesn\'t know my name is Brian.',
	'My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right.',
	'How do you make holy water? You boil the hell out of it.',
	'I bought some shoes from a drug dealer. I don\'t know what he laced them with, but I was tripping all day!',
	'Did you know the first French fries weren\'t actually cooked in France? They were cooked in Greece.',
	'If a child refuses to sleep during nap time, are they guilty of resisting a rest?',
	'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
	'I\'m reading a book about anti-gravity. It\'s impossible to put down!',
	'I ordered a chicken and an egg from Amazon. I’ll let you know',
	'What is the least spoken language in the world? Sign language',
	'My daughter screeched, "Daaaaaad, you haven\'t listened to one word I\'ve said, have you!?" What a strange way to start a conversation with me...',
	'My friend keeps saying "cheer up man it could be worse, you could be stuck underground in a hole full of water." I know he means well.',
	'Justice is a dish best served cold, if it were served warm it would be justwater.'
]



function newJoke() {
	var randomJoke = Math.floor(Math.random() * jokes.length);
	document.getElementById("joke-box").innerHTML = jokes[randomJoke];
	
}