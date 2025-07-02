
window.onload = function() {
    const divs = document.querySelectorAll('#sustentavel, #solidario');

    if (divs.length === 0) {
        console.error("Nenhuma div encontrada com os IDs 'sustentavel' ou 'solidario'");
    }

    divs.forEach(div => {
        div.addEventListener('mouseleave', () => {
            const scrollStep = div.scrollTop / 50; // Define a velocidade da transição
            const scrollInterval = setInterval(() => {
                if (div.scrollTop !== 0) {
                    div.scrollTop -= scrollStep; // Reduz a rolagem gradualmente até voltar ao topo
                } else {
                    clearInterval(scrollInterval); // Para a transição quando chegar ao topo
                }
            }, 30); // Tempo de atualização da transição
        });
    });
}
