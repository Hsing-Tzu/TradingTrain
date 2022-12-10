
var nameElement = document.getElementById("name");
var emailElement = document.getElementById("email");
var phoneElement = document.getElementById("phone");


function add() {
// 獲取table標籤元素
let table = document.getElementById("infotable");
// 建立新行
let newRow = table.insertRow();
// 建立三個新單元格 向表格中插入元素
newRow.insertCell().innerHTML = nameElement.value;
newRow.insertCell().innerHTML = emailElement.value;
newRow.insertCell().innerHTML = phoneElement.value;
newRow.insertCell().innerHTML = new Date().toLocaleString();
newRow.insertCell().innerHTML = '<input type="button" value="修改" class="button" onclick="editRow(this)"></input>  <input type="button" value="刪除" class="button" onclick="delRow(this)"></input>'
nameElement.value = '';
emailElement.value = '';
phoneElement.value = '';
}
function delRow(r) {
// 指定i=r(this)的父層+父層
var i = r.parentNode.parentNode.rowIndex;
// 刪除指定階層
document.getElementById("infotable").deleteRow(i);

}

