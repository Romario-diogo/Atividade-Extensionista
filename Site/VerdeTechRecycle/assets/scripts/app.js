document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/dados_coleta.json')
        .then(response => response.json())
        .then(data => {
            window.dadosColeta = data;
        });
});

function buscarPontos() {
    const enderecoInput = document.getElementById('endereco').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (!enderecoInput) {
        alert('Por favor, digite um endereço ou município.');
        return;
    }

    const resultados = window.dadosColeta.filter(item => 
        item.endereco.toLowerCase().includes(enderecoInput) ||
        item.ecoponto.toLowerCase().includes(enderecoInput) ||
        item.cep.toLowerCase().includes(enderecoInput)
    );

    if (resultados.length > 0) {
        resultados.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('result-item');
            div.innerHTML = `
                <p><strong>Ecoponto:</strong> ${item.ecoponto}</p>
                <p><strong>Endereço:</strong> ${item.endereco}</p>
                <p><strong>CEP:</strong> ${item.cep}</p>
            `;
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.innerHTML = '<p>Nenhum ponto de descarte encontrado.</p>';
    }
}
