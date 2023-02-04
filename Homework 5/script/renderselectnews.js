
const selectElements = [...document.getElementsByClassName('story-list__text2') ];
selectElements.forEach((selectElement, idx) => {
  const aElement = document.createElement('a');
  const imgElement = document.getElementsByClassName('podimg');
  aElement.href = selectnews[idx].href;
  aElement.innerText = selectnews[idx].text;
  imgElement.src = selectnews[idx].src;
  selectElement.appendChild(aElement);
});