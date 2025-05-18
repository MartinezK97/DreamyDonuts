function recargarAlRedimensionar() {
    let timeoutId;
    window.addEventListener('resize', () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            window.location.reload();
        }, 150); // Ajusta el retraso (en milisegundos) según necesites
    });
}

// Ejecutar la función
recargarAlRedimensionar();