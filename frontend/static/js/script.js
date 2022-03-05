let rand = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min + 1;
}

let beeQuote = () => {
    let quotes = ["i beeleive i can fly", "the hive mind is strong", "how buzzare", "whales, a force to bee reckoned with", "bee puns, hard to find", "whales are beeautiful", "bee positive", "wanna throw a frizz-bee", "buzz cuts are my fav", "stingapore is my holiday destination", "hive a nice day", "come closer, i dont sting"];
    document.title = `Buzz - ${quotes[rand(0,quotes.length-1)]}`
}

window.onload = () => {
    beeQuote();
}