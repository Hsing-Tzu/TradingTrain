const snElement = document.getElementById("sub-news");
const imgsnElement = document.getElementById("sub__image");
const textsnElement = document.getElementById("sub__text");
const titlesnElement = document.getElementById("sub__title");

imgsnElement.src = subnews.src;
textsnElement.innerText=subnews.text;
titlesnElement.innerText=subnews.title;