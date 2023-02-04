const aElement = document.getElementById("list-news__center");
const imgElement = document.getElementById("list-news__center__image");
const textElement = document.getElementById("list-news__center__text");
aElement.href = mainnews.href;
imgElement.src = mainnews.src;
textElement.innerText = mainnews.text;