const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
bot.login(token);
mainServer = null;
silinceTime = 0;

bot.on("ready", () => {
    console.log(bot.user.username + " is ready")
    mainServer = bot.guilds.get('xxxxxxxxxxxxxxxxxx');
    mainChannel = mainServer.channels.get('xxxxxxxxxxxxxxxxxx');
})

bot.on("message", msg => {
    silinceTime = 0;

    // send conversation starter on command
    if (msg.content.toLowerCase() === "start conversation") {
        msg.channel.send(starters[Math.floor(Math.random() * starters.length)]);
    } else {

    // send conversation starter if someone says they'e bored
        for (var i = 0; i < bored.length; i++) {
            if (bored[i].toLowerCase() === msg.content.toLowerCase().slice(0, bored[i].length)) {
                msg.reply(starters[Math.floor(Math.random() * starters.length)]);
                break;
            }
        };
    }
})

// send a conversation starter if there is a sixteen hour silence period.
setInterval(() => {
    silinceTime++;
    if (silinceTime > 60 * 16) {
        if (mainChannel) {
            mainChannel.send(starters[Math.floor(Math.random() * starters.length)]);
            silinceTime = 0;
        }
    }
}, 60000);

bot.on("error", err => {
    console.log(err);
})

const bored = [
    "I'm bored", "I'm bored!", "I'm bored...",
    "im bored", "im bored!", "im bored...",
    "so bored", "so bored!", "so bored..."
]

const starters = [
    "What was the last funny video you saw?",
    "What do you do to get rid of stress?",
    "What is something you are obsessed with?",
    "What three words best describe you?",
    "What would be your perfect weekend?",
    "What’s your favorite number? Why?",
    "What are you going to do this weekend?",
    "What’s the most useful thing you own?",
    "What’s your favorite way to waste time?",
    "What do you think of tattoos? Do you have any?",
    "Do you have any pets? What are their names?",
    "Where did you go last weekend? / What did you do last weekend?",
    "What did you do on your last vacation?",
    "When was the last time you worked incredibly hard?",
    "Are you very active, or do you prefer to just relax in your free time?",
    "What do you do when you hang out with your friends?",
    "Who is your oldest friend? Where did you meet them?",
    "What’s the best / worst thing about your work/school?",
    "If you had intro music, what song would it be? Why?",
    "What were you really into when you were a kid?",
    "If you could have any animal as a pet, what animal would you choose?",
    "Have you ever saved an animal’s life? How about a person’s life?",
    "If you opened a business, what kind of business would it be?",
    "Who is your favorite entertainer (comedian, musician, actor, etc.)?",
    "Are you a very organized person?",
    "Have you ever given a presentation in front of a large group of people? How did it go?",
    "What is the strangest dream you have ever had?",
    "What is a controversial opinion you have?",
    "Who in your life brings you the most joy?",
    "Who had the biggest impact on the person you have become?",
    "What is the most annoying habit someone can have?",
    "Where is the most beautiful place you have been?",
    "Where do you spend most of your free time/day?",
    "Who was your best friend in bored[i]ary school?",
    "How often do you stay up past 3 a.m.?",
    "What’s your favorite season? Why?",
    "Which is more important, having a great car or a great house? Why?",
    "Where is the most beautiful place near where you live?",
    "What do you bring with you everywhere you go?",
    "Where is the worst place you have been stuck for a long time?",
    "If you had to change your name, what would your new name be?",
    "What is something that really annoys you but doesn’t bother most people?",
    "What word or saying from the past do you think should come back?",
    "Was there ever an event in your life that defied explanation?",
    "What benefit do you bring to the group when you hang out with friends?",
    "How often do you curse? And what’s your go-to string of curse words?",
    "What trends did you follow when you were younger?",
    "What was the best period of your life so far? What do you think will be the best period of your entire life?",
    "What are some things you want to accomplish before you die?",
    "What is the best room in your house? Why?",
    "Where is the best place to take a date?",
    "What smell brings back great memories?",
    "What are you best at?",
    "What makes you nervous?",
    "Who is the funniest person you’ve met?",
    "What weird or useless talent do you have?",
    "What are some strange beliefs that some people have?",
    "What’s the best show currently on TV?",
    "What cartoons did you watch as a child?",
    "What’s the funniest TV series you have seen?",
    "What is the most overrated movie?",
    "What’s your favorite genre of movie?",
    "What movie scene choked you up the most?",
    "Do you like documentaries? Why / why not?",
    "What’s the worst movie you have seen recently?",
    "What’s the strangest movie you have ever seen?",
    "Do you like horror movies? Why or why not?",
    "When was the last time you went to a movie theater?",
    "What was the last movie you watched? How was it?",
    "Do you prefer to watch movies in the theater or in the comfort of your own home?",
    "What was the last song you listened to?",
    "What is your favorite movie soundtrack?",
    "Do you like classical music?",
    "What song always puts you in a good mood?",
    "What’s the best way to discover new music?",
    "Who was the first band or musician you were really into? Do you still like them?",
    "What restaurant do you eat at most?",
    "What’s the worst fast food restaurant?",
    "What is the best restaurant in your area?",
    "What is the fanciest restaurant you have eaten at?",
    "If you opened a restaurant, what kind of food would you serve?",
    "What was your favorite restaurant when you were a child?",
    "Where would you like to travel next?",
    "What is the longest plane trip you have taken?",
    "Where is the most awe-inspiring place you have been?",
    "What is your favorite shirt?",
    "What is the most comfortable piece of clothing you own?",
    "What personal goals do you have?",
    "What are your goals for the next two years?",
    "What do you like to do in the spring?"
]
