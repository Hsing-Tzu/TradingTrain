
const podElements = [...document.getElementsByClassName('pod') ];
podElements.forEach((podElement, idx) => {
  const aElement = document.createElement('a');
  const imgElement = document.getElementsByClassName('podimg');
  aElement.href = podnews[idx].href;
  aElement.innerText = podnews[idx].text;
  imgElement.src = podnews[idx].src;
  podElement.appendChild(aElement);
});
