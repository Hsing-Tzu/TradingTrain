const footer = document.getElementById("footer");
for (const item of footerlist){
    const aElement = document.createElement("a");
    const imgElement = document.createElement("img");
    imgElement.src = item.src;
    aElement.href = item.href;
    aElement.appendChild(imgElement);
    footer.appendChild(aElement);
};