function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
       window.location.href = "fornecedores.html";
    }
}


// FUNÇÃO PARA ARMAZENAR NOMES EM ARRAY
var dadosLista = [];
var dadosCnpj = [];

function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;
    if(nomeUser){
        dadosLista.push(nomeUser);
        salvarCnpj();
        criarLista();
        document.getElementById('nomeUser').value = '';
    }
}
// FUNÇÃO PARA ARMAZENAR CNPJ EM ARRAY

function salvarCnpj(){
    let nomeCnpj = parseInt(document.getElementById("nomeCnpj").value);
    if(nomeCnpj){
        dadosCnpj.push(nomeCnpj);
        document.getElementById('nomeCnpj').value = '';
    }
}
// FUNÇÃO PARA CRIAR LISTA DE USUÁRIOS
function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML =  '<tr><th>Nome Usuario</th><th>CNPJ</th><th>Ações</th></tr>';

    for(let i = 0;i <= (dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + dadosCnpj[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
    
//FUNÇÂO PARA EDITAR NOME e CNPJ
function editar(i){
    document.getElementById('nomeCnpj').value = dadosCnpj[(i - 1)];
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
    dadosCnpj.splice(dadosCnpj[(i - 1)], 1);
}

// FUNÇÂO PARA EXCLUIR NOME e CNPJ
function excluir(i){
    dadosCnpj.splice((i - 1), );
    dadosLista.splice((i - 1), );
    document.getElementById('tabela').deleteRow(i);
    document.getElementById('tabela').deleteRow(i);
}
