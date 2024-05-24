document.addEventListener("DOMContentLoaded", () => {
  const juegos = document.querySelectorAll("ul li a");
  const descripciones = {
    "https://www.friv.com/z/games/powerpamplona/game.html":
      "¿Quieres saber lo que se siente corriendo delante de un toro?, empieza por ahí y ayuda a este pamplonica a correr por todos los países.<br><br>¡Escapa del toro por las calles de Pamplona en este San Fermín! Salta cajas, mesas y aléjate de la multitud para que el toro no te atrape. Recuerda usar los toldos como ayuda para aumentar tu ventaja.<br><br>En Extreme Pamplona debes correr, saltar y esquivar todo lo que encuentres en tu camino. Una vez que escapes del toro, podrás elegir otro país.",
    "https://badicecream.io/":
      "Bad Ice Cream: ¡Controla a un helado y recoge frutas mientras evitas enemigos!",
    "https://www.retrogames.cc/embed/9157-metal-slug-super-vehicle-001.html":
      "Metal Slug: ¡Disfruta de la acción clásica de Metal Slug en este juego retro!",
    "https://www.retrogames.cc/embed/42476-mortal-kombat-rev-5-0-t-unit-03-19-93.html":
      "Mortal Kombat: ¡Lucha contra tus oponentes en combates llenos de acción!",
  };

  const controles = {
    "https://www.friv.com/z/games/powerpamplona/game.html":
      "/ruta/de/imagen/powerpamplona.jpg",
    "https://badicecream.io/": "/ruta/de/imagen/Bad ice Cream Contoles.jpg",
    "https://www.retrogames.cc/embed/9157-metal-slug-super-vehicle-001.html":
      "/ruta/de/imagen/metalslug.jpg",
    "https://www.retrogames.cc/embed/42476-mortal-kombat-rev-5-0-t-unit-03-19-93.html":
      "/ruta/de/imagen/mortalkombat.jpg",
  };

  juegos.forEach((juego) => {
    juego.addEventListener("click", (evento) => {
      evento.preventDefault();

      const url = juego.href;

      const iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.width = "100%";
      iframe.height = "100%"; 
      
      const fullscreenButton = document.createElement("button");
      fullscreenButton.textContent = "Pantalla Completa";
      fullscreenButton.style.position = 'absolute';
      fullscreenButton.style.left = '0px';
      fullscreenButton.style.borderRadius = '40px';
      fullscreenButton.style.height = '30px';

      fullscreenButton.addEventListener("click", () => {        
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        }
        
      });

      const contendor = document.getElementById("contentFrame");
      contendor.innerHTML = "";
      contendor.appendChild(iframe);
      contendor.appendChild(fullscreenButton);

      const descripcion = descripciones[url];
      actualizarDescripcion(descripcion);

      const rutaImagenControles = controles[url];
      actualizarControles(rutaImagenControles);
    });
  });

  function actualizarDescripcion(descripcion) {
    const descripcionSection = document.querySelector(".descripcion");
    descripcionSection.innerHTML = "<p>" + descripcion + "</p>";
    descripcionSection.classList.add("descripcion-estilo");
  }

  function actualizarControles(rutaImagenControles) {
    const controlesSection = document.querySelector(".controles");
    controlesSection.style.backgroundImage = `url(${rutaImagenControles})`;
    controlesSection.classList.add("controles-estilo");
  }
});