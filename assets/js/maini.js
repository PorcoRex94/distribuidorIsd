const nav = document.querySelector(".navbar");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlacesMenu = document.querySelectorAll(".navbar-list a");
const rubrosLink = document.getElementById("toggleRubros");
const dropdownContent = document.querySelector(".dropdown-content");

// Inicializa EmailJS con tu Public Key (esto debe suceder antes de enviar correos)
emailjs.init("y0xfA5hV6hGGUc1sd");

// Captura el formulario por su ID y gestiona el envío
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir el envío por defecto

      // Recoger los datos del formulario
      const templateParams = {
        name: document.getElementById("name").value,
        sureName: document.getElementById("sureName").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      if (!name || !sureName || !phone || !email || !message) {
        alert("Por favor, completa todos los campos.");
        return; // Detener la ejecución si hay campos vacíos
      }

      // Enviar el correo usando EmailJS
      emailjs
        .send("service_caw003o", "template_rsnlqy5", templateParams)
        .then(function (response) {
          alert("Formulario enviado correctamente: " + response.status);
        })
        .catch(function (error) {
          console.error("Error al enviar el formulario:", error);
          alert(
            "Ocurrió un error al enviar el formulario. Detalles en consola."
          );
        });
    });
});

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

// Seleccionamos los contenedores de imágenes
const logoContainers = document.querySelectorAll(".logo-container");

// Tiempo de cambio de imágenes (en milisegundos)
const intervaloCambio = 5000; // 5 segundos

// Función que realiza el cambio
function cambiarImagenes() {
  // Obtenemos todas las imágenes dentro de los contenedores
  const imagenesPrimeraFila = logoContainers[0].querySelectorAll(
    ".logo-container-img"
  );
  const imagenesSegundaFila = logoContainers[1].querySelectorAll(
    ".logo-container-img"
  );

  // Intercambiamos las imágenes entre la primera y la segunda fila
  logoContainers[0].appendChild(imagenesSegundaFila[0]);
  logoContainers[1].appendChild(imagenesPrimeraFila[0]);
}

// Rotar las imágenes a intervalos de tiempo
setInterval(cambiarImagenes, intervaloCambio);

// Desplegar menú de Rubros con clic en pantallas táctiles
rubrosLink.addEventListener("click", (e) => {
  e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  dropdownContent.classList.toggle("active"); // Mostrar/ocultar el submenú de Rubros
});
