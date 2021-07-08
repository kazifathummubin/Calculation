function sum(num1, num2) {

    document.getElementById("info").innerHTML = "";
    var node = document.createElement("td");
    var textNode = document.createTextNode(`Sum = ${num1 + num2}`);
    node.appendChild(textNode);
    document.getElementById("info").appendChild(node);
}

function sub(num1, num2) {

    document.getElementById("inf").innerHTML = "";
    var node = document.createElement("td");
    var textNode = document.createTextNode(`Sub = ${num1 - num2}`);
    node.appendChild(textNode);
    document.getElementById("inf").appendChild(node);
}

function mul(num1, num2) {

    document.getElementById("in").innerHTML = "";
    var node = document.createElement("td");
    var textNode = document.createTextNode(`Mul = ${num1 * num2}`);
    node.appendChild(textNode);
    document.getElementById("in").appendChild(node);
}

function div(num1, num2) {

    document.getElementById("i").innerHTML = "";
    var node = document.createElement("td");
    var textNode = document.createTextNode(`Div = ${num1 / num2}`);
    node.appendChild(textNode);
    document.getElementById("i").appendChild(node);
}

function mod(num1, num2) {

    document.getElementById("infor").innerHTML = "";
    var node = document.createElement("td");
    var textNode = document.createTextNode(`Mod = ${num1 % num2}`);
    node.appendChild(textNode);
    document.getElementById("infor").appendChild(node);
}