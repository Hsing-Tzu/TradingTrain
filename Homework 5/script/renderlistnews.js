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

const cElement = document.getElementById("editor-news");
const imgcElement = document.getElementById("editor-news__image");
const textcElement = document.getElementById("editor-news__text");
const namecElement = document.getElementById("editor-news__name");
cElement.href = editornews.href;
imgcElement.src = editornews.src;
textcElement.innerText = editornews.text;
namecElement.innerText =editornews.name;

const selecttextElements = [...document.getElementsByClassName('story-list__text2') ];
selecttextElements.forEach((selectElement, idx) => {
  const aElement = document.createElement('a');
  aElement.href = selectnews[idx].href;
  aElement.innerText = selectnews[idx].text;
  selectElement.appendChild(aElement);
});

const selectimageElements = [...document.getElementsByClassName('story-list__image2') ];
selectimageElements.forEach((selectElement, idx) => {
  const aElement = document.createElement('a');
  const imgElement = document.createElement('img');
  imgElement.className="selectimage";
  aElement.href = selectnews[idx].href;
  imgElement.src = selectnews[idx].src;
  selectElement.appendChild(aElement);
  aElement.appendChild(imgElement);
});

const np1Element = document.getElementById("newspaper-news__image1");
const imgnp1Element = document.getElementById("newspaper1");
np1Element.href = newspaper1.href;
imgnp1Element.src = newspaper1.src;

const np2Element = document.getElementById("newspaper-news__image2");
const imgnp2Element = document.getElementById("newspaper2");
np2Element.href = newspaper1.href;
imgnp2Element.src = newspaper1.src;