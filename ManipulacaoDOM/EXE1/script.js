let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);
// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');

let heading_1 = document.createElement('th');
heading_1.innerHTML = "Sr. No.";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Company";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);
//////////////////////////////////////
let LinhaDados = document.createElement('tr');

let colonaNova = document.createElement('td')
colonaNova.innerHTML = "teste1"

let colonaNova1 =document.createElement('td')
colonaNova1.innerHTML = "teste2"

LinhaDados.appendChild(colonaNova);
LinhaDados.appendChild(colonaNova1);
tbody.appendChild(LinhaDados);
