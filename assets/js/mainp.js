// Datos organizados por secciones, cada sección tiene una lista de impresoras

const sections = [
  {
    sectionId: "sunthinks",
    title: "SUNTHINKS",
    printers: [
      {
        image: "./assets/img/impresoras/sunthinks-sc300.png",
        imageBrand: "./assets/img/logos/logo-sunthinks-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "Sunthinks SC 300",
        description: "Revolución en impresión digital",
        text: "Con su alimentador automático opcional y dimensiones compactas, la SC300 es tu aliada para maximizar la productividad en tu taller de impresión. ¡Elevá tu negocio con la innovadora Sunthinks SC300!",
        specs: [
          "Cabezales: 1 HP® A3 Pagewide®.",
          "Velocidad: 30m/min.",
          "Resolución: Hasta 1200x1200dpi.",
          "Tinta: DYE (al agua) o Pigmento (CMYK).",
          "Ancho de impresión: Hasta 30 cm.",
        ],
        details:
          "Descubrí la impresora digital Sunthinks SC300, perfecta para packaging con un ancho de impresión de 30 cm. Ideal para imprimir directamente sobre cajas de pizza, bolsas de papel Kraft y mucho más, ofreciendo eficiencia y alta calidad.",
        pdfLink: "./assets/pdf/Sunthinks-SC300-HP-A3-1H-16-07-2024.pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20recibir%20más%20información%20sobre%20la%20Sunthinks%20SC300",
      },
      {
        image: "./assets/img/impresoras/sunthinks-sc600.png",
        imageBrand: "./assets/img/logos/logo-sunthinks-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "Sunthinks SC600",
        description: "La solución definitiva en impresión digital",
        text: "Optimizá tu producción con el alimentador automático opcional. La SC600 es la elección perfecta para transformar tu taller de impresión. ¡Maximizá tu eficiencia con la innovadora Sunthinks SC600!",
        specs: [
          "Cabezales: 2 HP® A3 Pagewide®.",
          "Velocidad: 30m/min.",
          "Resolución: Hasta 1200x1200dpi.",
          "Tinta: DYE (al agua) o Pigmento (CMYK).",
          "Ancho de impresión: Hasta 60 cm.",
        ],
        details:
          "Impulsá tu negocio con la impresora digital single pass Sunthinks SC600, diseñada para cartón corrugado de gran formato. Con un ancho de impresión de 60 cm, llevá tus impresiones al siguiente nivel con la máxima productividad.",
        pdfLink: "./assets/pdf/Sunthinks-SC600-HP-A3-2H-16-07-2024.pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20recibir%20más%20información%20sobre%20la%20Sunthinks%20SC600",
      },
      {
        image: "./assets/img/impresoras/sunthinks-sc900.png",
        imageBrand: "./assets/img/logos/logo-sunthinks-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "Sunthinks SC900",
        description: "La solución digital para fábricas de embalaje",
        text: "Optimizá tu producción con la SC900, la solución perfecta para fábricas de embalaje que buscan eficiencia y calidad superior. ¡Hacé brillar tu negocio con la innovadora Sunthinks SC900.",
        specs: [
          "Cabezales: 3 HP® A3 Pagewide®.",
          "Velocidad: 30m/min.",
          "Resolución: Hasta 1200x1200dpi.",
          "Tinta: DYE (al agua) o Pigmento (CMYK)",
          "Ancho de impresión: Hasta 90 cm.",
        ],
        details:
          "Llevá tu negocio de embalaje a nuevas alturas con la impresora digital single pass Sunthinks SC900. Diseñada para cartón corrugado de gran formato, esta impresora maximiza la rentabilidad y simplifica tu trabajo.",
        pdfLink: "./assets/pdf/Sunthinks-SC900-HP-A3-3H-16-07-2024.pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20recibir%20más%20información%20sobre%20la%20Sunthinks%20SC900",
      },
      {
        image: "./assets/img/impresoras/sunthinks-sc1200.png",
        imageBrand: "./assets/img/logos/logo-sunthinks-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "Sunthinks SC1200",
        description:
          "La solución digital avanzada para impresiones industriales",
        text: "Optimizá tu producción con la SC1200, la solución perfecta para fábricas de embalaje que buscan eficiencia y calidad superior. ¡Hacé brillar tu negocio con la innovadora Sunthinks SC1200.",
        specs: [
          "Cabezales: 4 HP® A3 Pagewide®.",
          "Velocidad: 30m/min.",
          "Resolución: Hasta 1200x1200dpi.",
          "Tinta: DYE (al agua) o Pigmento (CMYK)",
          "Ancho de impresión: Hasta 120 cm.",
        ],
        details:
          "Lleva tu producción al siguiente nivel con la impresora digital de gran formato Sunthinks SC1200. Con su avanzada tecnología de cabezales y alta resolución, la SC1200 está diseñada para ofrecer resultados excepcionales en entornos industriales. Optimiza la eficiencia y calidad de tus impresiones mientras reduces costos operativos con esta potente herramienta.",
        pdfLink: "./assets/pdf/Sunthinks SC1200 HP A3 4H (16-07-2024).pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20recibir%20más%20información%20sobre%20la%20Sunthinks%20SC1200",
      },
      {
        image: "./assets/img/impresoras/sunthinks-sc1500.png",
        imageBrand: "./assets/img/logos/logo-sunthinks-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "Sunthinks SC1500",
        description: "Revolucioná tu producción con tecnología de vanguardia",
        text: "Elevá tus estándares con la Sunthinks SC1500. Su combinación de velocidad, calidad y adaptabilidad la convierte en la elección ideal para fábricas de embalaje que buscan mantenerse a la vanguardia del mercado.",
        specs: [
          "Cabezales: 5 HP® A3 Pagewide®.",
          "Velocidad: 30m/min.",
          "Resolución: Hasta 1200x1200dpi.",
          "Tinta: DYE (al agua) o Pigmento (CMYK)",
          "Ancho de impresión: Hasta 150 cm.",
        ],
        details:
          "La Sunthinks SC1500 está diseñada para transformar la eficiencia y precisión en la producción de embalajes industriales. Con su avanzada tecnología de impresión digital single pass, esta máquina es el aliado perfecto para quienes buscan elevar la calidad y rapidez en cada proyecto.",
        pdfLink: "./assets/pdf/Sunthinks SC1500 HP A3 5H (16-07-2024).pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20recibir%20más%20información%20sobre%20la%20Sunthinks%20SC1500",
      },
      {
        image: "./assets/img/impresoras/sunthinks-sc1800.png",
        imageBrand: "./assets/img/logos/logo-sunthinks-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "Sunthinks SC1800",
        description: "Maximizá tu producción con eficiencia sin igual",
        text: "Hacé que tu negocio crezca con la tecnología que lidera el futuro del packaging. La Sunthinks SC1800 no solo cumple, sino que supera las expectativas de la industria, posicionando tu producción en la cima del rendimiento y la eficiencia.",
        specs: [
          "Cabezales: 6 HP® A3 Pagewide®.",
          "Velocidad: 30m/min.",
          "Resolución: Hasta 1200x1200dpi.",
          "Tinta: DYE (al agua) o Pigmento (CMYK)",
          "Ancho de impresión: Hasta 180 cm.",
        ],
        details:
          "La Sunthinks SC1800 es tu puerta de entrada a una nueva era en la impresión digital para embalajes. Esta máquina está diseñada para operaciones que requieren alta velocidad, precisión y versatilidad, convirtiéndose en la solución perfecta para proyectos de gran escala.",
        pdfLink: "./assets/pdf/Sunthinks SC1800 HP A3 6H (16-07-2024).pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20recibir%20más%20información%20sobre%20la%20Sunthinks%20SC1800",
      },
    ],
  },
  {
    sectionId: "flora",
    title: "FLORA",
    printers: [
      {
        image: "./assets/img/impresoras/flora-c25hpro.png",
        imageBrand: "./assets/img/logos/logo-flora-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "Flora C25h Pro",
        description:
          "¡La solución en impresión de cajas, displays y embalajes para el mundo de packaging industrial!",
        text: "La C25h Pro de Flora es el equipo más productivo, estable y rentable de su segmento.",
        specs: [
          "Cabezales industriales Epson S3200.",
          "Tinta al Agua o UV LED.",
          "Ancho: hasta 2,50 mts.",
          "Producciones de hasta 1200 m2/h.",
          "¡Es la impresora más veloz, eficiente y productiva del mercado!",
        ],
        details:
          "La famosa empresa líder en Asia-Pacífico, Flora, no sólo ha rediseñado la impresora C25h sino que, además, ha decidido incorporar la tecnología más avanzada de impresión como lo son los cabezales industriales más productivos del mercado, Epson S3200, logrando así mejor calidad y definición de impresión y alcanzando velocidades de hasta 1200 m2/h en una sola pasada.",
        pdfLink: "./assets/pdf/Flora-C25h-Pro.pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20más%20información%20sobre%20la%20Flora%20C25h Pro",
      },
    ],
  },
  {
    sectionId: "saga",
    title: "SAGA",
    printers: [
      {
        image: "./assets/img/impresoras/saga-asf420.png",
        imageBrand: "./assets/img/logos/logo-saga-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "Saga SG-ASF420",
        description: "¡Menos mano de obra, menos desperdicio y más producción!",
        text: "El equipo integra un stacker de salida para apilamiento de hojas (ya cortadas). Admite una altura de hasta 18cm, lo que serían 600 hojas aproximadamente (puede variar en función al gramaje del papel).",
        specs: [
          "Portaherramientas doble (2 herramientas en simultáneo).",
          "Herramientas: Corte, trazado y lapicera.",
          "Posicionamiento automático por cámara CCD.",
          "Panel de control táctil de 7 pulgadas.",
          "Escaneo por marcas de corte o código QR.",
        ],
        details:
          "El nuevo sistema de corte de carga automática, SG-ASF420 de Saga, está diseñado para la producción en masa de etiquetas, embalajes, papelería y aplicaciones varias de packaging.",
        pdfLink: "./assets/pdf/Saga-SG-ASF420.pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20más%20información%20sobre%20la%20Saga%20SG-ASF420",
      },
    ],
  },
  {
    sectionId: "iecho",
    title: "iECHO",
    printers: [
      {
        image: "./assets/img/impresoras/iecho-tk4s.png",
        imageBrand: "./assets/img/logos/logo-iecho-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "iECHO Serie TK4S",
        description:
          "¡Mesa de corte digital de gran formato pensado, diseñado y desarrollado para múltiples industrias!",
        text: "Con iECHO TK4S, ¡el límite lo ponés vos!",
        specs: [
          "Amplia variedad de herramientas.",
          "Sistema de posicionamiento automático por cámara CCD.",
          "Área de corte configurable.",
          "Te permite trabajar sobre una gran variedad de aplicaciones.",
          "Para todo tipo de producción en múltiples industrias.",
        ],
        details:
          "La Serie TK4S de iECHO presenta las mesas de corte automáticas de gran formato que te permiten trabajar con gran precisión el corte completo, medio corte, grabado, plegado, ranurado y marcado.",
        pdfLink: "./assets/pdf/Serie-TK4S-iecho.pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20más%20información%20sobre%20la%20iecho%20TK4S",
      },
      {
        image: "./assets/img/impresoras/iecho-bk3.png",
        imageBrand: "./assets/img/logos/logo-iecho-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "iECHO Serie BK3",
        description:
          "¡Mesa de corte digital de larga trayectoria, experiencia y actualización constante!",
        text: "¡Reducí la mano de obra, con menos intervención manual e incrementá tu productividad con iECHO!",
        specs: [
          "Amplia variedad de herramientas.",
          "Sistema de posicionamiento automático por cámara CCD.",
          "Área de corte configurable.",
          "Te permite trabajar sobre una gran variedad de aplicaciones.",
          "Todo tipo de producción para la comunicación visual y packaging",
        ],
        details:
          "Con la BK3 podés realizar trabajos de corte completo, medio corte, fresado, plegado y marcado a una velocidad sorprendente, con un corte increíblemente preciso y de forma súper sencilla.",
        pdfLink: "./assets/pdf/Serie-Bk3-iecho.pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20más%20información%20sobre%20la%20iecho%20BK3",
      },
      {
        image: "./assets/img/impresoras/iecho-pk-1209.png",
        imageBrand: "./assets/img/logos/logo-iecho-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "iECHO PK-1209 PRO",
        description:
          "¡Automatizá, simplificá y competí con los sistemas de corte automático de iECHO!",
        text: "¡La PK-1209 PRO es la alternativa más rentable que cumple con todos tus procesos creativos!",
        specs: [
          "Gran variedad de herramientas.",
          "Herramienta oscilante eléctrica (EOT).",
          "Área de corte: 120x90 cm.",
          "Te permite trabajar sobre una gran variedad de aplicaciones.",
          "Ideal para crecer en la industria del packaging",
        ],
        details:
          "La mesa de corte PK-1209 PRO es la opción ideal para la producción personalizada de tiradas cortas y la elaboración de muestras para la industria gráfica y de packaging.",
        pdfLink: "./assets/pdf/Iecho-PK-1209.pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20más%20información%20sobre%20la%20iecho%20PK1209",
      },
      {
        image: "./assets/img/impresoras/iecho-pk-series.png",
        imageBrand: "./assets/img/logos/logo-iecho-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "iECHO PK-0604 | PK-0705",
        description:
          "¡Automatizá, simplificá y competí con los sistemas de corte automático de iECHO!",
        text: "La Serie está compuesta por 4 equipos de corte inteligente (automático) equipados con diferentes herramientas que te permiten realizar medios cortes, cortes completos, trazados y marcados de una forma rápida, precisa y efectiva.",
        specs: [
          "Gran variedad de herramientas.",
          "Herramienta oscilante eléctrica (EOT).",
          "4 modelos disponibles.",
          "Te permite trabajar sobre una gran variedad de aplicaciones.",
          "Ideal para iniciarse en el mundo del packaging",
        ],
        details:
          "La Serie PK es perfecta para la producción personalizada de tiradas cortas y la elaboración de muestras para la industria gráfica y de packaging.",
        pdfLink: "./assets/pdf/PK0604-PK0705.pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20más%20información%20sobre%20la%20iecho%20PK0604%20y%PK0705",
      },
    ],
  },
  {
    sectionId: "industrial",
    title: "INDUSTRIAL INKJET LTD",
    printers: [
      {
        image: "./assets/img/impresoras/industrial-monoprint-colorprint.png",
        imageBrand: "./assets/img/logos/logo-industrial-inkjet-original.png",
        imagePdf: "./assets/img/logos/logo-pdf.png",
        imageWhats: "./assets/img/logos/logo-whatsapp.png",
        altText: "Industrial Inkjet Monoprint | Colorprint",
        description:
          "¡La solución en impresión de etiquetas y packaging industrial!",
        text: "Sea cual sea el módulo, todos los motores integran la tecnología de impresión más productiva del mercado. En este caso, podemos configurar los motores con cabezales KM1024i o KM1800i. Ofrecen velocidades de hasta 300 metros lineales por minuto... ¡increíblemente productivos!",
        specs: [
          "Motores de impresión Monoprint o Colorprint.",
          "Cabezales KM1024i o KM1800i.",
          "Impresión Singlepass (una pasada) con tintas UV.",
          "Adaptable a medida de cada cliente.",
          "Velocidades de impresión: 50-300m/min.",
        ],
        details:
          "Presentamos los motores de impresión de Industrial Inkjet. Se trata de motores de impresión singlepass (una sola pasada) con tintas UV. Son la solución perfecta para agregar a tu prensa flexográfica y duplicar o triplicar tu producción. Apto para sistema Retrofit.",
        pdfLink: "./assets/pdf/Retrofit-Monoprint-y-Colorprint.pdf",
        whatsappLink:
          "https://web.whatsapp.com/send?phone=541166722505&text=Hola,%20quisiera%20más%20información%20sobre%20la%20Industrial Inkjet%20Monoprint | Colorprint",
      },
    ],
  },
  // Puedes agregar más secciones y más impresoras dentro de cada sección.
];

// Seleccionar todos los enlaces con la clase "scroll-link"
document.querySelectorAll(".scroll-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    // Obtener el ID de la sección destino desde el href del enlace
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Hacer el scroll animado
    targetSection.scrollIntoView({
      behavior: "smooth", // Scroll suave
      block: "start", // Alinear al inicio
    });
  });
});

window.onscroll = function () {
  const header = document.getElementById("header");
  const extraContent = document.getElementById("inicio");

  if (window.scrollY > 100) {
    header.classList.add("header-small");
    extraContent.style.display = "none";
    extraContent.style.display = "block";
  } else {
    header.classList.remove("header-small");
    extraContent.style.display = "none"; // Ocultar contenido
  }
};

// Función para determinar el enlace correcto de WhatsApp
const getWhatsAppLink = (whatsappLink) => {
  const isMobile = window.innerWidth <= 768;
  return isMobile
    ? whatsappLink.replace("web.whatsapp.com", "api.whatsapp.com")
    : whatsappLink;
};

let globalPrinterCounter = 0;

// Función auxiliar para generar listas HTML
const generateListItems = (items, className) =>
  items.map((item) => `<li class="${className}">${item}</li>`).join("");

// Función para generar HTML de una impresora
const createPrinterItem = (printer, index) => {
  // Alternar clase para el layout
  globalPrinterCounter++;
  const layoutClass =
    globalPrinterCounter % 2 === 0 ? "layout-even" : "layout-odd";

  const whatsappOrder =
    globalPrinterCounter % 2 === 0 ? "order: 2;" : "order: 1;";
  const pdfOrder = globalPrinterCounter % 2 === 0 ? "order: 1;" : "order: 2;";

  // Generar specs y detalles
  const detailsHTML = Array.isArray(printer.details)
    ? printer.details.map((p) => `<p class="p-text">${p}</p>`).join("")
    : `<p class="p-text">${printer.details}</p>`;

  const specsHTML = generateListItems(printer.specs, "li-sun");

  return `
          <div class="container-impresoras ${layoutClass}">
            <div class="container-img">
              <img src="${printer.imageBrand}" alt="${
    printer.id
  }" class="logo-brand"/>
              <img src="${printer.image}" alt="${
    printer.altText
  }" class="impresora-img"/>
              <div class="container-btn">
              <a href="${getWhatsAppLink(
                printer.whatsappLink
              )}" target="_blank" class="btn" style="${whatsappOrder}"><img src="${
    printer.imageWhats
  }" alt="logo whatsapp" class="logo-whats"/>Atención por Whatsapp</a>
              <a href="${
                printer.pdfLink
              }" target="_blank" class="btn" style="${pdfOrder}"><img src="${
    printer.imagePdf
  }" alt="logo pdf" class="logo-pdf"/>Descargar PDF</a>
              </div>
            </div>
            <div class="container-der">
              <div class="container-h">
                <h3 class="hache-tres">${printer.altText}</h3>
                <h4 class="hache-cuatro">${printer.description}</h4>
              </div>
              ${detailsHTML}
              <ul class="ul-detalles">
                ${printer.specs
                  .map((spec) => `<li class="li-sun">${spec}</li>`)
                  .join("")}
              </ul>
              <p class="p-text">${printer.text}</p>
            </div>
          </div>
        `;
};

// Función para generar HTML de una sección con sus impresoras
const createSection = (section) => {
  const sectionElement = document.createElement("section");
  sectionElement.id = section.sectionId;

  const printerItems = section.printers.map(createPrinterItem).join("");

  sectionElement.innerHTML = `
          <h2 class="hache-dos">${section.title}</h2>
          <div class="container-sun">
            ${printerItems}
          </div>
        `;

  return sectionElement;
};

const nav = document.querySelector(".navbar");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlacesMenu = document.querySelectorAll(".navbar-list a");
const rubrosLink = document.getElementById("toggleRubros");
const dropdownContent = document.querySelector(".dropdown-content");
const header = document.querySelector("#header");
const body = document.body;

// Función para abrir el menú
abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  document.body.classList.add("no-scroll"); // Bloqueamos el scroll cuando se abre el menú
  header.style.position = "static";
});

// Función para cerrar el menú
cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  document.body.classList.remove("no-scroll"); // Habilitamos el scroll cuando se cierra el menú
  header.style.position = "fixed";
});

// Función para ocultar el menú al hacer clic en enlaces que no son "Rubros"
enlacesMenu.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    // Si el enlace clickeado no es el de "Rubros", cerramos el menú
    if (!enlace.closest(".dropdown")) {
      nav.classList.remove("visible");
      document.body.classList.remove("no-scroll"); // Habilitamos el scroll
      header.style.position = "fixed";
    }
  });
});

document.addEventListener("click", (e) => {
  // Verifica si el clic fue fuera del menú y del botón de abrir
  if (!nav.contains(e.target) && !abrir.contains(e.target)) {
    nav.classList.remove("visible");
    document.body.classList.remove("no-scroll");
    header.style.position = "fixed";
  }
});

rubrosLink.addEventListener("click", (e) => {
  e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  dropdownContent.classList.toggle("active"); // Mostrar/ocultar el submenú de Rubros
});

// Renderizar todas las secciones con sus impresoras
const container = document.getElementById("printer-container");
sections.forEach((section) => container.appendChild(createSection(section)));
