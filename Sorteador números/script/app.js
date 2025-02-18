// Função que realiza o sorteio de números
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    alert(`Sorteando ${quantidade} números entre ${de} e ${ate}`);

    // Array para armazenar os números sorteados
    let numerosSorteados = [];
    
    // Loop para sortear a quantidade de números especificada
    for (let i = 0; i < quantidade; i++) {
        // Gera um número aleatório dentro do intervalo especificado
        let numeroSorteado = Math.floor(Math.random() * (ate - de + 1)) + de;
        
        // Adiciona o número sorteado ao array
        numerosSorteados.push(numeroSorteado);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = numerosSorteados.join(', ');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
        alterarStatusBotao();
}

// Função que altera o status do botão
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
    } else {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}