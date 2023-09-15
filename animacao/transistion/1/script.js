let area = document.getElementById('area')

function anima(){
    let divTeste = document.createElement('div')
    divTeste.setAttribute('class', 'teste1')
    divTeste.innerHTML = 'lorem lorem lorem lorem lorem'
    area.appendChild(divTeste)
}