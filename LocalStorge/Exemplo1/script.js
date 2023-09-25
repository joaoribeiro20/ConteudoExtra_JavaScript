let CampoNome = document.getElementById("caixaNome")
let btnSalvar = document.getElementById('salvar')

let CampoExcluir = document.getElementById("caixaExcluir")
let btnExcluir = document.getElementById("excluir")
let novoAluno = 0
CampoNome.value
btnSalvar.addEventListener('click', salvarLocal)
btnExcluir.addEventListener('click', excluir)

function salvarLocal(){
 
    console.log(verificarNome())
    if(verificarNome() == false){
    localStorage.setItem(novoAluno, CampoNome.value)
    let nome = document.createElement("p")
    nome.innerText = `bem vindo ${CampoNome.value} seu id é ${novoAluno}`
    document.body.appendChild(nome)
    novoAluno = novoAluno + 1
} 
}

function verificarNome(){
    let verificar //variavel que vai amazenar o nome a ser pesquisado
    
    for(let i =0; i<= localStorage.length; i++){
    verificar = localStorage.getItem(i) 
    console.log(`o valor da primeira pesquisa foi: ${verificar} nome a ser pesquisado: ${CampoNome.value}`)

    //aqui ele vai verificar se o nome do id i é igual o nome que foi digitado 
    if(verificar == CampoNome.value){
        console.log("esse nome ja exite") 
        return true
        break
    }else{
        console.log("nome nao existe")
    }
   console.log(i)
   return false
}
    console.log("saiu do console")

}

function excluir(){

    if(localStorage.getItem(CampoExcluir.value) != null){
        localStorage.removeItem(CampoExcluir.value)  
      let nome = document.createElement("h2")
      nome.innerText = `o nome do id ${CampoExcluir.value} foi excluido com sucesso`
      document.body.appendChild(nome)
    }else{
          let nome = document.createElement("h2")
        nome.innerText = `o nome do id ${CampoExcluir.value} nao foi encontrado`
        document.body.appendChild(nome)
    }
    
      

      
    
    
}


   