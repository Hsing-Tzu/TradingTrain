
const podElements = [...document.getElementsByClassName('pod') ];
podElements.forEach((podElement, idx) => {
  const aElement = document.createElement('a');
  const imgElement = document.createElement('img');
  aElement.href = podnews[idx].href;
  aElement.innerText = podnews[idx].text;
  imgElement.src = podnews[idx].src;
  podElement.appendChild(imgElement);
  podElement.appendChild(aElement);
  
});
