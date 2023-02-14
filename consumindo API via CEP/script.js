async function buscaEndereco(cep) {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaConvertida = await consultaCep.json();
    if (consultaConvertida.erro) {
        throw Error('Cep inválido')
    }

    const endereco = document.getElementById('endereco');
    const bairro = document.getElementById('bairro');
    const cidade = document.getElementById('cidade');
    const estado = document.getElementById('estado');

    cidade.value = consultaConvertida.localidade
    endereco.value = consultaConvertida.logradouro
    bairro.value = consultaConvertida.bairro
    estado.value = consultaConvertida.uf
    
    console.log(consultaConvertida);
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))