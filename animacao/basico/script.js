const carro = document.getElementById('carro')
const esuqerda = document.getElementById('esquerda')
const direita = document.getElementById('direita')

const init=()=>{
    carro.style="position:relative;left:0px"
}

esuqerda.addEventListener("click",()=>{
    carro.style.left=parseInt(carro.style.left) - 10 + "px"

})
direita.addEventListener("click", ()=>{
    let pos=parseInt(carro.style.left)
    pos+=100
    carro.style=`position:relative;left:${pos}px`
})
window.onload=init