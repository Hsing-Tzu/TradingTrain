const leftElements = [...document.getElementsByClassName('story-list__text') ];
leftElements.forEach((leftElement, idx) => {
  const aElement = document.createElement('a');
  const imgElement = document.createElement('img');
  aElement.href = leftnews[idx].href;
  aElement.innerText = leftnews[idx].text;
  imgElement.src = leftnews[idx].src;
  leftElement.appendChild(imgElement);
  leftElement.appendChild(aElement);
  
});