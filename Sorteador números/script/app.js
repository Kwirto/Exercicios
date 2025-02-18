// Função que realiza o sorteio de números
function sortear() {
        let quantidade = parseInt(document.getElementById('quantidade').value);
        let de = document.getElementById('de').value;
    
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
} 