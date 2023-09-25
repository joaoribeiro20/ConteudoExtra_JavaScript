function primeiraFuncao(){
    return new Promise((resolve) => {
        setInterval(() => {
            console.log('esperou isso aqui')
            resolve()
        },1000)
    })
}

async function segundaFuncao(){
    console.log('iniciou')
     primeiraFuncao()
    //await primeiraFuncao()
    console.log('Finalizou')
}

segundaFuncao()

document.createElement
document.setAtributo
