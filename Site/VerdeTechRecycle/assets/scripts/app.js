document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/scripts/data/dados_coleta.json')
        .then(response => response.json())
        .then(data => {
            window.dadosColeta = data;
        });
});

function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        0.5 - Math.cos(dLat) / 2 + 
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        (1 - Math.cos(dLon)) / 2;

    return R * 2 * Math.asin(Math.sqrt(a));
}

function buscarPontos(lat, lon) {
    return window.dadosColeta.filter(item => {
        const distancia = calcularDistancia(lat, lon, item.latitude, item.longitude);
        return distancia <= 20;
    });
}
