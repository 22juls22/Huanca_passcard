const square1 = document.querySelector('.line');

let variable = gsap.timeline({
    repeat: Infinity,
  });
//primero se crea una variable que contendrá
//la secuencia de animaciones
  variable.to('.line', {
    duration: 1.5,
    // ease:Power2.easeIn,
    y:"98.5vh",
  }) ;
  variable.to('.line', {
    duration: 1.5,
    // ease:Power2.easeIn,
    y:"0vh",
  }) ;
 variable.to('.reloj', {
    duration: 1.5,
    scale: 1.5
  }, '-=3') ;
  variable.to('.reloj', {
    duration: 1.5,
    scale: 1
  }, '-=1.5') ; 


  function actualizarHora() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var meridiano = horas < 12 ? "AM" : "PM";
  
    // Convertir de formato de 24 horas a formato de 12 horas
    horas = horas % 12;
    horas = horas ? horas : 12; // Si es 0, entonces son las 12 en punto
  
    // Agregar un cero antes de los minutos y segundos si tienen un solo dígito
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
  
    var horaActual = horas + ":" + minutos + ":" + segundos + " " + meridiano;
  
    // Obtener todos los elementos con la clase "hora" y actualizar su contenido
    var elementosHora = document.getElementsByClassName("hora");
    for (var i = 0; i < elementosHora.length; i++) {
      elementosHora[i].innerHTML = horaActual;
    }
  }
  
  // Actualizar la hora cada segundo
  setInterval(actualizarHora, 1000);
  