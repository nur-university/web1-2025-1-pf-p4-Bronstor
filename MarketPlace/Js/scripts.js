document.addEventListener('DOMContentLoaded', function () {
  const botones = document.querySelectorAll('.btn');
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Función no disponible en versión estática.');
    });
  });
});
