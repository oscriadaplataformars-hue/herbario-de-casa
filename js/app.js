
const plantas = [
  {
    id: 1,
    nome: "Manzanilla",
    cientifico: "Matricaria chamomilla",
    categoria: "Flores",
    descripcion: "Planta herbácea de flores pequeñas con pétalos blancos y centro amarillo.",
    cultivo: "Se desarrolla mejor en suelo ligero y bien drenado. Puede cultivarse en macetas o jardines.",
    luz: "Sol directo o semisombra luminosa.",
    riego: "Moderado. Evita el encharcamiento.",
    cuidado: "Retira las flores marchitas para favorecer el crecimiento."
  },
  {
    id: 2,
    nome: "Romero",
    cientifico: "Salvia rosmarinus",
    categoria: "Aromáticas",
    descripcion: "Arbusto perenne de hojas estrechas y aroma intenso.",
    cultivo: "Prefiere suelos arenosos o bien drenados y espacios ventilados.",
    luz: "Sol directo durante varias horas al día.",
    riego: "Escaso a moderado. Deja secar el sustrato entre riegos.",
    cuidado: "Poda ligeramente las ramas para conservar su forma."
  },
  {
    id: 3,
    nome: "Menta",
    cientifico: "Mentha spicata",
    categoria: "Aromáticas",
    descripcion: "Planta de hojas verdes, bordes dentados y aroma fresco.",
    cultivo: "Crece bien en macetas. Conviene mantenerla en un recipiente propio porque se extiende rápidamente.",
    luz: "Semisombra o sol suave.",
    riego: "Regular, manteniendo el sustrato ligeramente húmedo.",
    cuidado: "Recorta las puntas para estimular nuevos brotes."
  },
  {
    id: 4,
    nome: "Lavanda",
    cientifico: "Lavandula angustifolia",
    categoria: "Flores",
    descripcion: "Planta aromática de flores violetas y hojas estrechas.",
    cultivo: "Necesita suelo ligero, seco y con excelente drenaje.",
    luz: "Sol directo y buena ventilación.",
    riego: "Moderado a escaso, evitando el exceso de humedad.",
    cuidado: "Realiza podas ligeras después de la floración."
  },
  {
    id: 5,
    nome: "Aloe vera",
    cientifico: "Aloe vera",
    categoria: "Suculentas",
    descripcion: "Planta suculenta de hojas gruesas y carnosas dispuestas en roseta.",
    cultivo: "Utiliza sustrato para cactus y macetas con orificios de drenaje.",
    luz: "Luz abundante; acostúmbrala gradualmente al sol directo.",
    riego: "Escaso. Espera a que el sustrato se seque antes de volver a regar.",
    cuidado: "Protege la planta de las heladas y del exceso de agua."
  },
  {
    id: 6,
    nome: "Albahaca",
    cientifico: "Ocimum basilicum",
    categoria: "Aromáticas",
    descripcion: "Planta aromática de hojas suaves y verdes, muy utilizada en jardines y huertos.",
    cultivo: "Crece bien en macetas con tierra fértil y buen drenaje.",
    luz: "Sol suave o semisombra luminosa.",
    riego: "Regular, sin dejar agua acumulada.",
    cuidado: "Retira las flores cuando quieras favorecer el crecimiento de las hojas."
  },
  {
    id: 7,
    nome: "Perejil",
    cientifico: "Petroselinum crispum",
    categoria: "Aromáticas",
    descripcion: "Planta de hojas verdes divididas y crecimiento compacto.",
    cultivo: "Prefiere suelo fértil, fresco y con buen drenaje.",
    luz: "Sol suave o semisombra.",
    riego: "Regular, manteniendo cierta humedad en la tierra.",
    cuidado: "Retira hojas amarillas y cosecha las hojas exteriores."
  },
  {
    id: 8,
    nome: "Caléndula",
    cientifico: "Calendula officinalis",
    categoria: "Flores",
    descripcion: "Planta de flores amarillas o anaranjadas y aspecto ornamental.",
    cultivo: "Se adapta a jardines y macetas con suelo bien drenado.",
    luz: "Sol directo o semisombra.",
    riego: "Moderado, evitando mojar constantemente el suelo.",
    cuidado: "Retira las flores marchitas para prolongar la floración."
  },
  {
    id: 9,
    nome: "Tomillo",
    cientifico: "Thymus vulgaris",
    categoria: "Aromáticas",
    descripcion: "Pequeño arbusto aromático de hojas diminutas y tallos leñosos.",
    cultivo: "Prefiere suelos ligeros, secos y con excelente drenaje.",
    luz: "Sol directo.",
    riego: "Escaso. Tolera periodos cortos de sequedad una vez establecido.",
    cuidado: "Evita el exceso de fertilizante y realiza podas suaves."
  },
  {
    id: 10,
    nome: "Orégano",
    cientifico: "Origanum vulgare",
    categoria: "Aromáticas",
    descripcion: "Planta perenne de hojas pequeñas y aroma característico.",
    cultivo: "Puede crecer en macetas o jardines con suelo bien drenado.",
    luz: "Sol directo.",
    riego: "Moderado a escaso, según el clima y la humedad del suelo.",
    cuidado: "Poda las ramas para estimular un crecimiento más compacto."
  }
];

const app = document.getElementById("app");

let favoritos = JSON.parse(
  localStorage.getItem("herbario-favoritos") || "[]"
);

app.innerHTML = `
  <header>
    <h1>HERBARIO DE CASA</h1>
    <p>CONOCE • CULTIVA • CONSERVA</p>
  </header>

  <main>
    <h2>Bienvenido a tu herbario</h2>
    <p>Descubre, cultiva y conoce el mundo de las plantas.</p>

    <nav class="menu">
      <button data-section="plantas">Plantas</button>
      <button data-section="favoritos">Favoritos</button>
      <button data-section="calendario">Calendario</button>
      <button data-section="diario">Mi diario</button>
      <button data-section="biblioteca">Biblioteca</button>
    </nav>

    <section id="contenido"></section>
  </main>

  <footer>
    HERBARIO DE CASA · CONOCE • CULTIVA • CONSERVA
  </footer>
`;

const contenido = document.getElementById("contenido");

function mostrarPlantas(filtro = "", soloFavoritos = false) {
  const encontradas = plantas.filter(planta => {
    const texto = (
      planta.nome + " " +
      planta.cientifico + " " +
      planta.categoria
    ).toLowerCase();

    const coincide = texto.includes(filtro.toLowerCase());
    const favorita = favoritos.includes(planta.id);

    return coincide && (!soloFavoritos || favorita);
  });

  contenido.innerHTML = `
    <h2>${soloFavoritos ? "Mis favoritos" : "Biblioteca botánica"}</h2>
    <p>Explora las fichas de nuestras plantas.</p>

    <input
      class="search"
      id="busqueda"
      type="search"
      placeholder="Buscar una planta..."
    >

    <div id="lista-plantas">
      ${
        encontradas.length
          ? encontradas.map(planta => `
            <article class="card">
              <h3>${planta.nome}</h3>
              <p><em>${planta.cientifico}</em></p>
              <p>${planta.categoria}</p>
              <p>${planta.descripcion}</p>
              <button data-plant-id="${planta.id}">
                Ver ficha completa
              </button>
            </article>
          `).join("")
          : "<p>No se encontraron plantas.</p>"
      }
    </div>
  `;

  const busqueda = document.getElementById("busqueda");
  busqueda.value = filtro;

  busqueda.addEventListener("input", event => {
    mostrarPlantas(event.target.value, soloFavoritos);
  });
}

function mostrarFicha(id) {
  const planta = plantas.find(item => item.id === id);
  if (!planta) return;

  const esFavorita = favoritos.includes(id);

  contenido.innerHTML = `
    <button id="volver">← Volver a la biblioteca</button>

    <article class="card">
      <h2>${planta.nome}</h2>
      <p><em>${planta.cientifico}</em></p>
      <p><strong>Categoría:</strong> ${planta.categoria}</p>

      <h3>Descripción botánica</h3>
      <p>${planta.descripcion}</p>

      <h3>Cómo cultivar</h3>
      <p>${planta.cultivo}</p>

      <h3>Iluminación</h3>
      <p>${planta.luz}</p>

      <h3>Riego</h3>
      <p>${planta.riego}</p>

      <h3>Cuidados</h3>
      <p>${planta.cuidado}</p>

      <button id="favorito">
        ${esFavorita ? "★ Quitar de favoritos" : "☆ Añadir a favoritos"}
      </button>
    </article>

    <p><small>
      Información orientativa de jardinería. Los nombres comunes
      pueden variar según la región. Confirma siempre la identidad
      botánica antes de cualquier uso. Estas fichas no son
      indicaciones de consumo ni tratamientos médicos.
      Mantén las plantas fuera del alcance de niños y mascotas
      cuando exista riesgo de toxicidad.
    </small></p>
  `;

  document.getElementById("volver").addEventListener("click", () => {
    mostrarPlantas();
  });

  document.getElementById("favorito").addEventListener("click", () => {
    if (favoritos.includes(id)) {
      favoritos = favoritos.filter(item => item !== id);
    } else {
      favoritos.push(id);
    }

    localStorage.setItem(
      "herbario-favoritos",
      JSON.stringify(favoritos)
    );

    mostrarFicha(id);
  });
}

document.querySelectorAll("[data-section]").forEach(button => {
  button.addEventListener("click", () => {
    const seccion = button.dataset.section;

    if (seccion === "plantas") {
      mostrarPlantas();
    } else if (seccion === "favoritos") {
      mostrarPlantas("", true);
    } else {
      contenido.innerHTML = `
        <h2>${button.textContent}</h2>
        <p>Esta sección está en desarrollo.</p>
        <button id="volver">Volver a plantas</button>
      `;

      document.getElementById("volver").addEventListener(
        "click",
        mostrarPlantas
      );
    }
  });
});

contenido.addEventListener("click", event => {
  const botao = event.target.closest("[data-plant-id]");

  if (botao) {
    mostrarFicha(Number(botao.dataset.plantId));
  }
});

mostrarPlantas();
