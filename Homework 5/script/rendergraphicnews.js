const gnElement = document.getElementById("graphic");
const imggnElement = document.getElementById("graphic__image");
const titlegnElement = document.getElementById("graphic__title");
const textgnElement = document.getElementById("graphic__text");

gnElement.href = graphicnews.href;
imggnElement.src= graphicnews.src;
titlegnElement.innerText= graphicnews.title;
textgnElement.innerText= graphicnews.text;
