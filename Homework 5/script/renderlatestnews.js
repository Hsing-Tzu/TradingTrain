const latestElements = [...document.getElementsByClassName('latest') ];
latestElements.forEach((latestElement, idx) => {
  const aElement = document.createElement('a');
  const imgElement = document.createElement('img');
  aElement.href = latestnews[idx].href;
  aElement.innerText = latestnews[idx].text;
  imgElement.src = latestnews[idx].src;
  latestElement.appendChild(imgElement);
  latestElement.appendChild(aElement);
  
});