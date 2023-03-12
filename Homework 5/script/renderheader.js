const header = document.getElementById("menu");
for (const item of headerlist){
    const aElement = document.createElement("a");
    aElement.innerText = item.name;
    aElement.href = item.href;
    header.appendChild(aElement);
};
const header1 = document.getElementById("menu1");
for (const item of headerlist){
    const aElement = document.createElement("a");
    aElement.innerText = item.name;
    aElement.href = item.href;
    header1.appendChild(aElement);
};