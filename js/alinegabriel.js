
var nome = window.prompt("qual é seu nome?")
window.alert("Bem vindo ao nosso site calcular IMC "+nome+", lembre-se de que, caso esteja acima do peso, procure um nutricionista o quanto antes!!")
const pessoa = document.querySelectorAll("tr");

for (var list = 1; list < pessoa.length; list++) {
    var peso = pessoa[list].querySelector(".info-peso").innerHTML; //utilizando innerHTML para puxar todas as formatações do html
    var altura = pessoa[list].querySelector(".info-altura").innerHTML; //utilizando innerHTML para puxar todas as formatações do html

    const resultado = peso / (altura * altura);

    const imc = pessoa[list].querySelector(".info-imc");
    imc.innerHTML = `<td class="info-imc">${resultado.toFixed(2)}</td>`;  // toFixed() arredonda o número para cima, isto é, se temos, por exemplo 11.123 , o valor fica 11.12  
}

const novalistinha = (classList) => {
    classList.preventDefault();

    var nome = document.getElementById("nome").value; //declarando variável nome
    var peso = document.getElementById("peso").value; //declarando variável peso
    var altura = document.getElementById("altura").value; //declarando variável altura
    var gordura = document.getElementById("gordura").value; //declarando variável gordura

    if(peso > 0 && peso < 300 && altura > 0 && altura < 3.0){
        const tbody = document.querySelector("tbody");
        const tr = document.createElement("tr");

        var resultado = peso / ( altura * altura);
        resultado = resultado.toFixed(2); // toFixed() arredonda o número para cima, isto é, se temos, por exemplo 11.123 , o valor fica 11.12
        const conteudo = `<td class="info-nome">${nome}</td>  <td class="info-peso">${peso}</td> <td class="info-altura">${altura}</td>  <td class="info-gordura">${gordura}</td> <td class="info-imc">${resultado}</td>`

        tr.innerHTML = conteudo;
        tr.classList.add("pessoa"); //para adicionar uma nova pessoa na lista

        tbody.appendChild(tr);
    } else { window.confirm("ATENÇÃO!! Você precisa digitar um valor que seja maior que zero e menor que 300, e a altura maior que zero e menor que 3");  }
}

const go = document.getElementById("adicionar-paciente");
go.addEventListener('click', novalistinha); //adicionando novalistinha