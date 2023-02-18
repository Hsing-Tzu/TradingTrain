const bElement = document.getElementById("list-news__last");
const imgbElement = document.getElementById("list-news__last__image");
const titlebElement = document.getElementById("list-news__last__title");
const textbElement = document.getElementById("list-news__last__text");

bElement.href = lastnews.href;
imgbElement.src = lastnews.src;
titlebElement.innerText = lastnews.title;
textbElement.innerText = lastnews.text;