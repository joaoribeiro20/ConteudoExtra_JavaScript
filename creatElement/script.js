

let btnCriar = document.querySelector('#btnCriar')
let btnExcluir = document.querySelector('#btnExcluir')

let divExibir = document.querySelector('#divExibir')
let inputInfo = document.querySelector('#inputInfo')



btnCriar.addEventListener('click', ()=>{
    novoItem(inputInfo.value)
    inputInfo.value = '' 
    inputInfo.focus()   
    
})

btnExcluir.addEventListener('click', ()=>{
    excluirItem(inputInfo.value)
    inputInfo.value = '' 
    inputInfo.focus()
})

function excluirItem(id){
    let teste = `.id${id}`
    console.log(teste)
    let liExcluir = document.querySelector(`${teste}`)
    divExibir.removeChild(liExcluir)
}

function novoItem(txt){
    let li = document.createElement("li")
    let id = idR()
    li.setAttribute('class', `id${id}`)
    li.innerText = txt
    divExibir.appendChild(li)
}

function idR(){
    //return Math.random();
   // return Math.random() * 20;
    return parseInt(Math.random() * 20)
}