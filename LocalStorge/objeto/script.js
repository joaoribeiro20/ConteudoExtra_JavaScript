let CampoNome = document.querySelector('.CampoNome')
let CampoEmail =document.querySelector('.CampoEmail')
let CampoIdade = document.querySelector('.CampoIdade')
let CampoTurma=document.querySelector('.CampoTurma')
const minhaListaDeObjetos = [];
let key_primary=0


function init(){
    const jsonStringRecuperada = localStorage.getItem('minhaLista');
    
    // 4. Converta a string JSON de volta para um array de objetos
    const listaRecuperada = JSON.parse(jsonStringRecuperada);
    minhaListaDeObjetos = listaRecuperada
}

function salvar(){

    minhaListaDeObjetos[key_primary]={
        nome:CampoNome.value,
        email:CampoEmail.value,
        idade:CampoIdade.value,
        turma:CampoTurma.value,
        id:key_primary
    }

    console.log(minhaListaDeObjetos)

    const jsonString = JSON.stringify(minhaListaDeObjetos);
  
    // 2. Armazene a string JSON no localStorage
    localStorage.setItem('minhaLista', jsonString);
     console.log(jsonString); 
    // Para recuperar a lista de objetos do localStorage:
    
    // 3. Recupere a string JSON do localStorage
    const jsonStringRecuperada = localStorage.getItem('minhaLista');
    
    // 4. Converta a string JSON de volta para um array de objetos
    const listaRecuperada = JSON.parse(jsonStringRecuperada);
    
    // Agora, listaRecuperada conterá seu array de objetos original
    console.log(listaRecuperada); 
    key_primary=key_primary+1
}




let divMenu = document.getElementById("divMenu")
let nav = document.getElementById("navBarra")


let exibirMenu= () => {
   nav.style.display = "flex"
   nav.style.flexDirection = "column" 
    /*  divMenu.style.position = "fixed" */

   divMenu.style.height = "250px"
   divMenu.style.width = "150px"
   divMenu.style.backgroundColor = "rgb(211, 247, 5)"

    }
let esconderMenu = () => {
    nav.style.display = "none"
    divMenu.style.height = "5px"
    divMenu.style.width = "5px"
    divMenu.style.backgroundColor = "rgb(0, 0, 0)"
    }


/* let menu = `  
<nav>
<a href="excluir.html">excluir usuario</a>
<a href="pesquisar.html">pesquisar usuario</a>
<a href="listaUsuarios.html">lista todos usuarios</a>
</nav>`

let exibirMenu = () => {
divMenu.innerHTML =  `  
<nav>
<a " href="excluir.html">excluir usuario</a>
<a href="pesquisar.html">pesquisar usuario</a>
<a href="listaUsuarios.html">lista todos usuarios</a>
</nav>`
}
let esconderMenu = () => {
    divMenu.innerHTML =  `  
   `
    }*/
divMenu.addEventListener("mouseover", exibirMenu)

divMenu.addEventListener("mouseout", esconderMenu)  

window.onload= init()