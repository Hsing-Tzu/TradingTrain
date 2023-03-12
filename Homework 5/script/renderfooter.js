const sociallist = document.getElementById("social-list");
for (const item of footerlist){
    const aElement = document.createElement("a");
    const imgElement = document.createElement("img");
    imgElement.src = item.src;
    aElement.href = item.href;
    aElement.appendChild(imgElement);
    sociallist.appendChild(aElement);
};

const footernote = document.getElementById("footer-note");
for (const item of note){
    const aElement = document.createElement("a");
    aElement.innerText = item.name;
    aElement.href = item.href;
    footernote.appendChild(aElement);
};