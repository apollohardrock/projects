function codeValue() {
    let inputValue = document.getElementById("inputCode").value.trim();
    imgBarCode.src = `` /*link da API do código de barras*/
}

function codeFunction() {
    var x = document.getElementById("inputCode").value;
    document.getElementById("imgBarCode").innerHTML = x;
}

function prodFunction() {
    var y = document.getElementById("thing").value;
    document.getElementById("prod").innerHTML = y;
}

function precoFunction() {
    var z = document.getElementById("money").value;
    document.getElementById("preco").innerHTML = 'R$' + z;
}

function ocultar1() {
    document.getElementById("barras").style.display = "none";
    document.getElementById("code").style.display = "block";
}

function ocultar2() {
    document.getElementById("item").style.display = "none";
    document.getElementById("prod").style.display = "block";
}

function ocultar3() {
    document.getElementById("cash").style.display = "none";
    document.getElementById("preco").style.display = "block";
}
