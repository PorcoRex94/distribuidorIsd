const nav = document.querySelector(".navbar");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlacesMenu = document.querySelectorAll(".navbar-list a");
const rubrosLink = document.getElementById("toggleRubros");
const dropdownContent = document.querySelector(".dropdown-content");

// Función para abrir el menú
abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  document.body.classList.add("no-scroll"); // Bloqueamos el scroll cuando se abre el menú
});

// Función para cerrar el menú
cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  document.body.classList.remove("no-scroll"); // Habilitamos el scroll cuando se cierra el menú
});

// Función para ocultar el menú al hacer clic en enlaces que no son "Rubros"
enlacesMenu.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    // Si el enlace clickeado no es el de "Rubros", cerramos el menú
    if (!enlace.closest(".dropdown")) {
      nav.classList.remove("visible");
      document.body.classList.remove("no-scroll"); // Habilitamos el scroll
    }
  });
});

document.addEventListener("click", (e) => {
  // Verifica si el clic fue fuera del menú y del botón de abrir
  if (!nav.contains(e.target) && !abrir.contains(e.target)) {
    nav.classList.remove("visible");
    document.body.classList.remove("no-scroll");
  }
});

// Desplegar menú de Rubros con clic en pantallas táctiles
rubrosLink.addEventListener("click", (e) => {
  e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  dropdownContent.classList.toggle("active"); // Mostrar/ocultar el submenú de Rubros
});
