
const fechaActual = new Date();


if ((fechaActual.getMonth() === 8 && fechaActual.getDate() === 12) )

{

    for (let i = 0; i < 100; i++) { 
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw'; 
        confetti.style.backgroundColor = getRandomColor();
        document.body.appendChild(confetti);
    }
    


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
     "¡Feliz Día del Programador! ¡Que tus bugs sean pocos y tus commits sean muchos!",
     "¡Feliz Día del Programador! ¡Ustedes son los verdaderos Jedi del código, capaces de dominar cualquier lenguaje de programación con la Fuerza!",
        "¡Hoy celebramos a los magos de la informática! ¡Su habilidad para crear mundos virtuales es digna de Hogwarts!",
        "¡Feliz Día del Programador! ¡Ustedes son los verdaderos Iron Man del código, construyendo soluciones ingeniosas y poderosas con su intelecto!",
        "¡Hoy celebramos a los Thor de la programación! ¡Su dominio de los lenguajes y herramientas es tan impactante como un martillazo de Mjolnir!",
        "¡Feliz Día del Programador! ¡Gracias por ser los Hulk de la resolución de problemas, aplastando bugs y errores con su fuerza y determinación!",
        "¡Un saludo a los programadores! ¡Su agilidad mental y capacidad de adaptación son tan impresionantes como las de Spider-Man balanceándose entre las líneas de código!",
        "¡Feliz Día del Programador! ¡Que su creatividad brille como las Gemas del Infinito, creando aplicaciones y soluciones que cambien el mundo!",
        "¡Feliz Día del Programador! ¡Gracias por ser los guardianes de la galaxia digital, protegiéndonos de los bugs y los virus!",
        "¡Un brindis por los programadores! ¡Su lógica y creatividad son más poderosas que el Anillo Único!",
        "¡Feliz Día del Programador! ¡Ustedes son los verdaderos superhéroes, capaces de arreglar cualquier problema con un simple 'sudo'!",
        "¡Hoy honramos a los arquitectos del futuro! ¡Su código construye los cimientos de la innovación!",
        "¡Feliz Día del Programador! ¡Gracias por hacer posible que viajemos a través del ciberespacio a la velocidad de la luz!",
        "¡Un saludo a los programadores! ¡Su capacidad para resolver problemas es más impresionante que el Halcón Milenario!",
        "¡Feliz Día del Programador! ¡Ustedes son los verdaderos piratas del código, navegando por los mares de la lógica y encontrando tesoros en cada línea!",
        "¡Hoy celebramos a los nakamas de la programación! ¡Su trabajo en equipo y determinación son tan fuertes como la voluntad de D!",
        "¡Feliz Día del Programador! ¡Gracias por crear mundos digitales tan emocionantes como el Grand Line, llenos de aventuras y desafíos!",
        "¡Feliz Día del Programador! ¡Ustedes son los verdaderos fontaneros del código, saltando obstáculos y arreglando bugs con la misma habilidad que Mario!",
        "¡Hoy celebramos a los héroes del mundo digital! ¡Su valentía para enfrentar cualquier desafío es tan grande como la de Mario enfrentando a Bowser!",
        "¡Feliz Día del Programador! ¡Gracias por crear mundos virtuales tan mágicos como el Reino Champiñón, llenos de sorpresas y power-ups!",
        "¡Feliz Día del Programador! ¡Ustedes son los alquimistas modernos, transformando líneas de código en oro digital!",
        "¡Feliz Día del Programador! ¡Ustedes son los verdaderos guerreros Z del código, luchando contra los bugs y alcanzando nuevos niveles de poder con cada línea!",
        "¡Hoy celebramos a los super saiyajin de la programación! ¡Su energía y pasión por el código son tan intensas como un Kame Hame Ha!",
        "¡Feliz Día del Programador! ¡Gracias por crear mundos digitales tan épicos como el Torneo de las Artes Marciales, donde la creatividad y la habilidad se enfrentan!",
        "¡Un saludo a los programadores! ¡Su capacidad para superar obstáculos y aprender nuevas tecnologías es tan inspiradora como la transformación de Goku en Super Saiyajin!",
        "¡Feliz Día del Programador! ¡Que su código sea tan legendario como las Esferas del Dragón, capaz de cumplir cualquier deseo digital!"
    

  ];

  const mensajeAleatorio = mensajesGuru[Math.floor(Math.random() * mensajesGuru.length)];
  document.getElementById('mensaje').textContent = mensajeAleatorio;

  alert(mensajeAleatorio);
  const numConfetti = Math.floor(Math.random() * 100) + 100; 
  const confettiData = [];
  for (let i = 0; i < numConfetti; i++) {
      const confetti = {
          left: `${Math.random() * 100}vw`,
          top: `${Math.random() * 100}vh`,
          width: `${Math.random() * 5 + 5}px`, 
          height: `${Math.random() * 5 + 5}px`, 
          backgroundColor: getRandomColor(),
          rotate: Math.random() * 360 - 180, 
          animationDuration: `${Math.random() * 2 + 2}s` 
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