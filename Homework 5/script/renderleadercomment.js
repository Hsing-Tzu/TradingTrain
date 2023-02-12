
const authorElements = [...document.getElementsByClassName('author') ];
authorElements.forEach((authorElement, idx) => {
  const aElement = document.createElement('a');
  const divElement=document.createElement("div")
  const imgElement = document.createElement('img');
  aElement.href = authornews[idx].href;
  aElement.innerText = authornews[idx].text;
  imgElement.src = authornews[idx].src;
  divElement.innerText=authornews[idx].name;
  authorElement.appendChild(imgElement);
  authorElement.appendChild(divElement);
  authorElement.appendChild(aElement);
  
});
