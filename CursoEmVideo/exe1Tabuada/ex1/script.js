let valor = document.getElementById('info')
let res1 = document.getElementById('areaRes')
let res2 = document.getElementById('caixa')
let cont = 0

function validar(){
    if(valor.value != '' && parseInt(valor.value)){ 
        return true
    }else{
        return false
    }
}

function calcular(){
//console.log(validar())
//console.log(valor.value)
let mult
let resultado = []
res2.innerText = ""

    if(validar() === true){

    while(cont < 10){

    mult = parseFloat(valor.value)*cont

    resultado[cont]=mult

    let item = document.createElement('li')
    item.innerText = `${valor.value}x${cont}=${resultado[cont]}`
    res2.appendChild(item)

    cont++ 
}
    }else{
        alert('digite um numero dentro da caixa de texto')
    }

    cont = 0;
    valor.value = ''
}