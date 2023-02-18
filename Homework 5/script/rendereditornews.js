const cElement = document.getElementById("editor-news");
const imgcElement = document.getElementById("editor-news__image");
const textcElement = document.getElementById("editor-news__text");
const namecElement = document.getElementById("editor-news__name");
cElement.href = editornews.href;
imgcElement.src = editornews.src;
textcElement.innerText = editornews.text;
namecElement.innerText =editornews.name;