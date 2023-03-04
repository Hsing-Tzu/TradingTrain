const leftElements = [...document.getElementsByClassName('story-list__text3') ];
leftElements.forEach((leftElement, idx) => {
  const aElement = document.createElement('a');
  const imgElement = document.createElement('img');
  aElement.href = leftnews[idx].href;
  aElement.innerText = leftnews[idx].text;
  imgElement.src = leftnews[idx].src;
  leftElement.appendChild(imgElement);
  leftElement.appendChild(aElement);
});

const aElement = document.getElementById("list-news__center");
const imgElement = document.getElementById("list-news__center__image");
const textElement = document.getElementById("list-news__center__text");
aElement.href = mainnews.href;
imgElement.src = mainnews.src;
textElement.innerText = mainnews.text;

const bElement = document.getElementById("list-news__last");
const imgbElement = document.getElementById("list-news__last__image");
const titlebElement = document.getElementById("list-news__last__title");
const textbElement = document.getElementById("list-news__last__text");
bElement.href = lastnews.href;
imgbElement.src = lastnews.src;
titlebElement.innerText = lastnews.title;
textbElement.innerText = lastnews.text;