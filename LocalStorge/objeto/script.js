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
