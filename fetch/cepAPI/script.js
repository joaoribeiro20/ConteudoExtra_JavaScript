/* let cep = document.getElementById('cep')
let url = `https://cep.awesomeapi.com.br/json/${cep}`
 */

    


    fetch('https://cep.awesomeapi.com.br/json/05868590')
  .then(function (response) {
    // Caso a requisição tenha sucesso irá cair aqui
    return response.json();
  })
  .then(function (data) {
    // É possível encadear as chamadas de then(), no caso esse segundo then, tem o que foi retornado no primeiro.
    console.log(data);
  })
  .catch(function (error) {
    // Caso dê algum erro na request, irá cair aqui
    console.log(error);
  });