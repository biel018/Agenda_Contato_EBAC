const form = document.getElementById('form-contato');
const nomes = []
const telefone = []

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if(nomes.includes(inputNomeContato.value)) {
        alert (`Esse contato ${inputNomeContato.value} ja foi inserido!`);
    } else {
        nomes.push(inputNomeContato.value);
        telefone.push(parseFloat(inputTelefoneContato.value));

        let linha = `<tr>`;
        linha += `<td> ${inputNomeContato.value}</td>`;
        linha += `<td> ${inputTelefoneContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const tabelaContato = document.querySelector ('tbody');
    tabelaContato.innerHTML = linhas;
}