const header = document.getElementById("menu");
for (const item of headerlist){
    const aElement = document.createElement("a");
    aElement.innerText = item.name;
    aElement.href = item.href;
    header.appendChild(aElement);
};