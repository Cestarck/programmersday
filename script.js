
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
     "¡Feliz Día del Programador! ¡Que tus bugs sean pocos y tus commits sean muchos!",
     "¡Feliz Día del Programador! ¡Ustedes son los verdaderos Jedi del código, capaces de dominar cualquier lenguaje de programación con la Fuerza!",
        "¡Hoy celebramos a los magos de la informática! ¡Su habilidad para crear mundos virtuales es digna de Hogwarts!",
        "¡Feliz Día del Programador! ¡Gracias por ser los guardianes de la galaxia digital, protegiéndonos de los bugs y los virus!",
        "¡Un brindis por los programadores! ¡Su lógica y creatividad son más poderosas que el Anillo Único!",
        "¡Feliz Día del Programador! ¡Ustedes son los verdaderos superhéroes, capaces de arreglar cualquier problema con un simple 'sudo'!",
        "¡Hoy honramos a los arquitectos del futuro! ¡Su código construye los cimientos de la innovación!",
        "¡Feliz Día del Programador! ¡Gracias por hacer posible que viajemos a través del ciberespacio a la velocidad de la luz!",
        "¡Un saludo a los programadores! ¡Su capacidad para resolver problemas es más impresionante que el Halcón Milenario!",
        "¡Feliz Día del Programador! ¡Ustedes son los alquimistas modernos, transformando líneas de código en oro digital!",
        "¡Hoy celebramos a los verdaderos maestros del universo! ¡Su conocimiento es más vasto que la biblioteca de Alejandría!"

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