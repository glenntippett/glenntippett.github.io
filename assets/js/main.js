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
	'Justice is a dish best served cold, if it were served warm it would be justwater.',
	'What do prisoners use to call each other? Cell phones.',
	'How do you make a Kleenex dance? Put a little boogie in it!',
	'I told my 14 year old son I thought \'Fortnite\' was a stupid name for a computer game. I think it is just too weak.',
	'DAD, TO A SINGER: "Don’t forget a bucket." SINGER: "Why?" DAD: "To carry your tune."',
	'What do you call a lonely cheese? Provolone.',
	'Did you see they made round bails of hay illegal in Wisconsin? It’s because the cows weren’t getting a square meal.',
	'Did you hear about the guy who invented Lifesavers? They say he made a mint.',
	'You heard of that new band 1023MB? They\'re good but they haven\'t got a gig yet.',
	'I had a dream that I was a muffler last night. I woke up exhausted!',
	'If you rearrange the letters of “Postmen”. They get really pissed off.',
	'I was interrogated over the theft of a cheese toastie. Man, they really grilled me.',
	'What do you get when you cross an elephant with a rhino? Elephino.',
	'Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans!',
	'Want to hear a joke about a piece of paper? Never mind... it\'s tearable.',
	'I’m only familiar with 25 letters in the English language. I don’t know why.'
]



function newJoke() {
	var randomJoke = Math.floor(Math.random() * jokes.length);
	document.getElementById("joke-box").innerHTML = jokes[randomJoke];
	
}