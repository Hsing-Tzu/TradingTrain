const latestElements = [...document.getElementsByClassName('latest') ];
latestElements.forEach((latestElement, idx) => {
  const aElement = document.createElement('a');
  const a1Element = document.createElement('a');
  const imgElement = document.createElement('img');
  aElement.href = latestnews[idx].href;
  aElement.className = "latesttitle";
  aElement.innerText = latestnews[idx].text;
  a1Element.innerText = latestnews[idx].content;
  a1Element.className = "latestcontent";
  imgElement.src = latestnews[idx].src;
  latestElement.appendChild(imgElement);
  latestElement.appendChild(aElement);
  latestElement.appendChild(a1Element);
});