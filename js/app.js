
const plantas = [
  {
    id: 1,
    nome: "Manzanilla",
    categoria: "Flores",
    descripcion: "Planta aromática de flores pequeñas y delicadas.",
    cultivo: "Prefiere lugares soleados y suelo con buen drenaje.",
    cuidado: "Riega moderadamente y evita el exceso de humedad."
  },
  {
    id: 2,
    nome: "Romero",
    categoria: "Aromáticas",
    descripcion: "Arbusto aromático de hojas estrechas y perennes.",
    cultivo: "Necesita bastante sol y suelo bien drenado.",
    cuidado: "Deja secar parcialmente la tierra entre riegos."
  },
  {
    id: 3,
    nome: "Menta",
    categoria: "Aromáticas",
    descripcion: "Planta de hojas verdes y aroma fresco.",
    cultivo: "Crece bien en macetas y lugares con luz abundante.",
    cuidado: "Mantén la tierra ligeramente húmeda."
  },
  {
    id: 4,
    nome: "Lavanda",
    categoria: "Flores",
    descripcion: "Planta aromática conocida por sus flores violetas.",
    cultivo: "Prefiere sol directo y suelo con buen drenaje.",
    cuidado: "Evita el exceso de agua."
  },
  {
    id: 5,
    nome: "Aloe vera",
    categoria: "Suculentas",
    descripcion: "Planta suculenta de hojas carnosas.",
    cultivo: "Necesita mucha luz y sustrato bien drenado.",
    cuidado: "Riega poco y evita dejar agua acumulada."
  }
];

const app = document.getElementById("app");

let favoritos = JSON.parse(localStorage.getItem("herbario-favoritos") || "[]");

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
    const coincide = planta.nome.toLowerCase().includes(filtro.toLowerCase());
    const favorita = favoritos.includes(planta.id);
    return coincide && (!soloFavoritos || favorita);
  });

  contenido.innerHTML = `
    <h2>${soloFavoritos ? "Mis favoritos" : "Biblioteca botánica"}</h2>
    <input
      class="search"
      id="busqueda"
      type="search"
      placeholder="Buscar una planta..."
      value="${filtro}"
    >
    <div id="lista-plantas">
      ${
        encontradas.length
          ? encontradas.map(planta => `
            <article class="card">
              <h3>${planta.nome}</h3>
              <p>${planta.categoria}</p>
              <p>${planta.descripcion}</p>
              <button data-plant-id="${planta.id}">Ver ficha</button>
            </article>
          `).join("")
          : "<p>No se encontraron plantas.</p>"
      }
    </div>
  `;

  document.getElementById("busqueda").addEventListener("input", event => {
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
      <p><strong>Categoría:</strong> ${planta.categoria}</p>

      <h3>Descripción</h3>
      <p>${planta.descripcion}</p>

      <h3>Cómo cultivar</h3>
      <p>${planta.cultivo}</p>

      <h3>Cuidados</h3>
      <p>${planta.cuidado}</p>

      <button id="favorito">
        ${esFavorita ? "★ Quitar de favoritos" : "☆ Añadir a favoritos"}
      </button>
    </article>

    <p><small>
      Información orientativa de jardinería. Confirma siempre la
      identificación botánica antes de cualquier uso. No utilices
      estas fichas como indicación de consumo o tratamiento.
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

    localStorage.setItem("herbario-favoritos", JSON.stringify(favoritos));
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

      document.getElementById("volver").addEventListener("click", mostrarPlantas);
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
