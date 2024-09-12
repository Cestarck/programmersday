
const fechaActual = new Date();


if ((fechaActual.getMonth() === 8 && fechaActual.getDate() === 12) )
//    (fechaActual.getDate() === 256)) 
{

    for (let i = 0; i < 100; i++) { // Crea 50 piezas de confeti
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
        confetti.style.backgroundColor = getRandomColor(); // Color aleatorio
        document.body.appendChild(confetti);
    }
    

    // Función auxiliar para generar colores aleatorios
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

  const mensajesGuru = [
     "¡Feliz Día del Programador! ¡Recuerda, no todos los héroes llevan capa, algunos llevan teclados!",
     "¡Hoy celebramos a los magos del código binario! ¡Que la fuerza (y el café) los acompañe!",
     "¡Feliz Día del Programador! ¡Gracias por convertir nuestras ideas locas en realidad (y por arreglar nuestros errores)!",
     "¡Un brindis por los programadores! ¡Porque sin ustedes, estaríamos aún en la Edad de Piedra digital!",
     "¡Feliz Día del Programador! ¡Que tus bugs sean pocos y tus commits sean muchos!"
  ];

  const mensajeAleatorio = mensajesGuru[Math.floor(Math.random() * mensajesGuru.length)];

  alert(mensajeAleatorio);
  const numConfetti = Math.floor(Math.random() * 100) + 100; // Entre 100 y 200 piezas
  const confettiData = [];
  for (let i = 0; i < numConfetti; i++) {
      const confetti = {
          left: `${Math.random() * 100}vw`,
          top: `${Math.random() * 100}vh`,
          width: `${Math.random() * 5 + 5}px`, // Entre 5 y 10 px de ancho
          height: `${Math.random() * 5 + 5}px`, // Entre 5 y 10 px de alto
          backgroundColor: getRandomColor(),
          rotate: Math.random() * 360 - 180, // Rotación entre -180 y 180 grados
          animationDuration: `${Math.random() * 2 + 2}s` // Duración entre 2 y 4 segundos
      };
      confettiData.push(confetti);
  }

  const confettiContainer = document.getElementById('confetti-container');
confettiData.forEach(confetti => {
  const confettiDiv = document.createElement('div');
  confettiDiv.classList.add('confetti');
  confettiDiv.style.left = confetti.left;
  confettiDiv.style.top = confetti.top;
  confettiDiv.style.width = confetti.width;
  confettiDiv.style.height = confetti.height;
  confettiDiv.style.backgroundColor = confetti.background_color;
  confettiDiv.style.transform = `rotate(${confetti.rotate}deg)`;
  confettiDiv.style.animation = `confetti-fall ${confetti.animation_duration}s linear forwards`;
  confettiContainer.appendChild(confettiDiv);
});
  console.log(fechaActual.getDate())
  console.log(mensajeAleatorio); 
}