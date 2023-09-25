
let projetos = document.getElementById('projetos')
let campoProjeto







function teste1(){


    try {
         removerTela()
         campoProjeto = document.createElement('div')
         campoProjeto.setAttribute("class", "exibirProjeto")
         let elementoTitulo = document.createElement('h2');//criando um elemento 
         let elementoDivisao = document.createElement('hr')
         let texto = document.createElement('p')
         
        
         texto.innerHTML = 'lorem lorem lorem lomre lorem lorem lorem lomrem' 
         elementoDivisao.color = 'blueviolet'
         elementoTitulo.innerHTML = 'Projeto 1 com sucesso' //atribuindo informaçoes para dentro do elemento 

         campoProjeto.appendChild(elementoTitulo); //adicionando o elemento dentro da div chamada readme
         campoProjeto.appendChild(elementoDivisao)
         campoProjeto.appendChild(texto)
        
         projetos.appendChild(campoProjeto) 
         
         
    } catch (error) {
        campoProjeto = document.createElement('div')
        campoProjeto.setAttribute("class", "exibirProjeto")
        let elementoTitulo = document.createElement('h2');//criando um elemento 
        let elementoDivisao = document.createElement('hr')
        let texto = document.createElement('p')
        
       
        texto.innerHTML = 'lorem lorem lorem lomre lorem lorem lorem lomrem' 
        elementoDivisao.color = 'blueviolet'
        elementoTitulo.innerHTML = 'Projeto 1 com sucesso' //atribuindo informaçoes para dentro do elemento 

        campoProjeto.appendChild(elementoTitulo); //adicionando o elemento dentro da div chamada readme
        campoProjeto.appendChild(elementoDivisao)
        campoProjeto.appendChild(texto)
        
        projetos.appendChild(campoProjeto)
        
    }
}
    


function teste2(){
    try {
        removerTela()
        campoProjeto = document.createElement('div')
    let elementoTitulo = document.createElement('h2');//criando um elemento 
    elementoTitulo.innerHTML = 'Projeto 2 com sucesso' //atribuindo informaçoes para dentro do elemento 
    campoProjeto.appendChild(elementoTitulo); //adicionando o elemento dentro da div chamada readme
    projetos.appendChild(campoProjeto)
    } catch (error) {
        
        campoProjeto = document.createElement('div')
        let elementoTitulo = document.createElement('h2');//criando um elemento 
        elementoTitulo.innerHTML = 'Projeto 2 com sucesso' //atribuindo informaçoes para dentro do elemento 
        campoProjeto.appendChild(elementoTitulo); //adicionando o elemento dentro da div chamada readme
        projetos.appendChild(campoProjeto)
    }
    
}

function removerTela(){
    projetos.removeChild(campoProjeto)
}
