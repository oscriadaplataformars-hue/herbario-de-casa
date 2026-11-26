

const plantas = [
  {id:1,nome:"Manzanilla",cientifico:"Matricaria chamomilla",categoria:"Flores",descripcion:"Planta herbácea de flores pequeñas con pétalos blancos y centro amarillo.",cultivo:"Se desarrolla mejor en suelo ligero y bien drenado.",luz:"Sol directo o semisombra luminosa.",riego:"Moderado. Evita el encharcamiento.",cuidado:"Retira las flores marchitas."},
  {id:2,nome:"Romero",cientifico:"Salvia rosmarinus",categoria:"Aromáticas",descripcion:"Arbusto perenne de hojas estrechas y aroma intenso.",cultivo:"Prefiere suelos arenosos y bien drenados.",luz:"Sol directo.",riego:"Escaso a moderado.",cuidado:"Realiza podas ligeras para conservar su forma."},
  {id:3,nome:"Menta",cientifico:"Mentha spicata",categoria:"Aromáticas",descripcion:"Planta de hojas verdes, bordes dentados y aroma fresco.",cultivo:"Crece bien en macetas y se extiende rápidamente.",luz:"Semisombra o sol suave.",riego:"Regular, manteniendo el sustrato ligeramente húmedo.",cuidado:"Recorta las puntas para estimular nuevos brotes."},
  {id:4,nome:"Lavanda",cientifico:"Lavandula angustifolia",categoria:"Flores",descripcion:"Planta aromática de flores violetas y hojas estrechas.",cultivo:"Necesita suelo ligero y excelente drenaje.",luz:"Sol directo.",riego:"Moderado a escaso.",cuidado:"Realiza podas ligeras después de la floración."},
  {id:5,nome:"Aloe vera",cientifico:"Aloe vera",categoria:"Suculentas",descripcion:"Planta suculenta de hojas gruesas y carnosas.",cultivo:"Utiliza sustrato para cactus y macetas con drenaje.",luz:"Luz abundante.",riego:"Escaso. Espera a que el sustrato se seque.",cuidado:"Protégela de las heladas y del exceso de agua."},
  {id:6,nome:"Albahaca",cientifico:"Ocimum basilicum",categoria:"Aromáticas",descripcion:"Planta aromática de hojas suaves y verdes.",cultivo:"Crece bien en tierra fértil y bien drenada.",luz:"Sol suave o semisombra luminosa.",riego:"Regular, sin dejar agua acumulada.",cuidado:"Retira las flores para favorecer el crecimiento de hojas."},
  {id:7,nome:"Perejil",cientifico:"Petroselinum crispum",categoria:"Aromáticas",descripcion:"Planta de hojas verdes divididas y crecimiento compacto.",cultivo:"Prefiere suelo fértil, fresco y bien drenado.",luz:"Sol suave o semisombra.",riego:"Regular.",cuidado:"Retira las hojas amarillas."},
  {id:8,nome:"Caléndula",cientifico:"Calendula officinalis",categoria:"Flores",descripcion:"Planta ornamental de flores amarillas o anaranjadas.",cultivo:"Se adapta a jardines y macetas.",luz:"Sol directo o semisombra.",riego:"Moderado.",cuidado:"Retira las flores marchitas."},
  {id:9,nome:"Tomillo",cientifico:"Thymus vulgaris",categoria:"Aromáticas",descripcion:"Pequeño arbusto aromático de hojas diminutas.",cultivo:"Prefiere suelos ligeros y secos.",luz:"Sol directo.",riego:"Escaso.",cuidado:"Evita el exceso de fertilizante."},
  {id:10,nome:"Orégano",cientifico:"Origanum vulgare",categoria:"Aromáticas",descripcion:"Planta perenne de hojas pequeñas y aroma característico.",cultivo:"Puede crecer en macetas o jardines.",luz:"Sol directo.",riego:"Moderado a escaso.",cuidado:"Poda las ramas para estimular un crecimiento compacto."},
  {id:11,nome:"Cilantro",cientifico:"Coriandrum sativum",categoria:"Aromáticas",descripcion:"Planta anual de hojas verdes delicadas y flores pequeñas.",cultivo:"Prefiere suelo suelto y fértil. Puede cultivarse en macetas.",luz:"Sol suave o semisombra en climas cálidos.",riego:"Regular, sin encharcar.",cuidado:"Siembra escalonadamente para prolongar la cosecha."},
  {id:12,nome:"Salvia",cientifico:"Salvia officinalis",categoria:"Aromáticas",descripcion:"Planta perenne de hojas aterciopeladas y color verde grisáceo.",cultivo:"Necesita suelo ligero y buen drenaje.",luz:"Sol directo.",riego:"Moderado a escaso.",cuidado:"Poda ligeramente después de la floración."},
  {id:13,nome:"Toronjil",cientifico:"Melissa officinalis",categoria:"Aromáticas",descripcion:"Planta de hojas verdes con bordes dentados y aroma cítrico.",cultivo:"Crece bien en suelo fértil y macetas amplias.",luz:"Semisombra o sol suave.",riego:"Regular, manteniendo cierta humedad.",cuidado:"Recorta las ramas para controlar su crecimiento."},
  {id:14,nome:"Cebollino",cientifico:"Allium schoenoprasum",categoria:"Aromáticas",descripcion:"Planta de hojas finas, verdes y cilíndricas.",cultivo:"Se adapta bien a macetas con tierra fértil.",luz:"Sol suave o semisombra.",riego:"Regular, evitando el encharcamiento.",cuidado:"Corta las hojas dejando una parte de la base."},
  {id:15,nome:"Eneldo",cientifico:"Anethum graveolens",categoria:"Aromáticas",descripcion:"Planta anual de hojas finas y aspecto plumoso.",cultivo:"Prefiere suelo ligero y un lugar protegido del viento fuerte.",luz:"Sol directo.",riego:"Moderado y regular.",cuidado:"Evita trasplantarla repetidamente."},
  {id:16,nome:"Hinojo",cientifico:"Foeniculum vulgare",categoria:"Aromáticas",descripcion:"Planta de follaje fino y aroma anisado.",cultivo:"Necesita espacio y suelo profundo con buen drenaje.",luz:"Sol directo.",riego:"Regular, especialmente durante el crecimiento.",cuidado:"Deja espacio entre plantas para su desarrollo."},
  {id:17,nome:"Capuchina",cientifico:"Tropaeolum majus",categoria:"Flores",descripcion:"Planta ornamental de hojas redondeadas y flores vistosas.",cultivo:"Crece en macetas y jardines con suelo bien drenado.",luz:"Sol o semisombra.",riego:"Moderado.",cuidado:"Retira hojas deterioradas y controla su expansión."},
  {id:18,nome:"Pensamiento",cientifico:"Viola × wittrockiana",categoria:"Flores",descripcion:"Planta ornamental de flores coloridas y pétalos característicos.",cultivo:"Prefiere suelo fértil, fresco y bien drenado.",luz:"Sol suave o semisombra.",riego:"Regular.",cuidado:"Retira flores marchitas."},
  {id:19,nome:"Geranio",cientifico:"Pelargonium × hortorum",categoria:"Flores",descripcion:"Planta ornamental de hojas redondeadas y flores agrupadas.",cultivo:"Se adapta bien a macetas y jardineras.",luz:"Sol suave o semisombra luminosa.",riego:"Moderado, dejando secar parcialmente la superficie.",cuidado:"Retira flores secas y hojas amarillas."},
  {id:20,nome:"Jazmín",cientifico:"Jasminum officinale",categoria:"Flores",descripcion:"Planta trepadora de flores claras y fragancia característica.",cultivo:"Necesita soporte para crecer y suelo fértil con drenaje.",luz:"Sol o semisombra luminosa.",riego:"Regular durante el crecimiento.",cuidado:"Guía sus ramas y realiza podas después de la floración."},
  {id:21,nome:"Ruda",cientifico:"Ruta graveolens",categoria:"Aromáticas",descripcion:"Arbusto perenne de hojas verde azuladas y aroma intenso.",cultivo:"Crece en suelo ligero y bien drenado.",luz:"Sol directo.",riego:"Moderado a escaso una vez establecida.",cuidado:"Usa guantes al podarla: su savia puede irritar la piel y causar fotosensibilidad. No ingerir."},
  {id:22,nome:"Hierbabuena",cientifico:"Mentha spicata",categoria:"Aromáticas",descripcion:"Planta de hojas verdes y aroma fresco, de crecimiento vigoroso.",cultivo:"Ideal para macetas que contengan sus raíces expansivas.",luz:"Semisombra o sol suave.",riego:"Regular, sin encharcar.",cuidado:"Recorta tallos para mantener una forma compacta."},
  {id:23,nome:"Stevia",cientifico:"Stevia rebaudiana",categoria:"Aromáticas",descripcion:"Planta perenne de hojas verdes y pequeñas flores blancas.",cultivo:"Prefiere suelo fértil, suelto y con buen drenaje.",luz:"Sol suave o semisombra en zonas calurosas.",riego:"Regular, sin saturar el suelo.",cuidado:"Protege del frío intenso y poda las puntas para ramificar."},
  {id:24,nome:"Lemongrass",cientifico:"Cymbopogon citratus",categoria:"Aromáticas",descripcion:"Planta de hojas largas y arqueadas, con aroma cítrico.",cultivo:"Necesita espacio, suelo fértil y drenaje adecuado.",luz:"Sol directo.",riego:"Regular durante el crecimiento.",cuidado:"Retira hojas secas y protege de las heladas."},
  {id:25,nome:"Diente de león",cientifico:"Taraxacum officinale",categoria:"Silvestres",descripcion:"Planta de hojas dentadas y flores amarillas que forman esferas de semillas.",cultivo:"Crece en suelos diversos y puede cultivarse en macetas profundas.",luz:"Sol o semisombra.",riego:"Moderado.",cuidado:"Evita recolectar ejemplares de zonas tratadas con químicos o contaminadas."},
  {id:26,nome:"Milenrama",cientifico:"Achillea millefolium",categoria:"Flores",descripcion:"Planta perenne con hojas finamente divididas y flores agrupadas.",cultivo:"Prefiere suelos bien drenados y espacios abiertos.",luz:"Sol directo.",riego:"Moderado a escaso una vez establecida.",cuidado:"Retira flores secas y controla su expansión."},
  {id:27,nome:"Equinácea",cientifico:"Echinacea purpurea",categoria:"Flores",descripcion:"Planta ornamental con flores de pétalos rosados o púrpuras y centro prominente.",cultivo:"Se desarrolla en suelo fértil y bien drenado.",luz:"Sol directo.",riego:"Regular durante el establecimiento; después moderado.",cuidado:"Retira flores marchitas si deseas prolongar la floración."},
  {id:28,nome:"Borraja",cientifico:"Borago officinalis",categoria:"Flores",descripcion:"Planta anual de hojas ásperas y flores azules en forma de estrella.",cultivo:"Prefiere suelo suelto y fértil en jardines o macetas amplias.",luz:"Sol o semisombra luminosa.",riego:"Moderado.",cuidado:"Manipula con cuidado sus hojas ásperas. No recomendar consumo sin evaluación especializada."},
  {id:29,nome:"Consuelda",cientifico:"Symphytum officinale",categoria:"Ornamentales",descripcion:"Planta perenne de hojas grandes y flores acampanadas.",cultivo:"Prefiere suelo profundo, húmedo y rico en materia orgánica.",luz:"Sol suave o semisombra.",riego:"Regular, manteniendo el suelo fresco.",cuidado:"Puede extenderse mediante sus raíces. No ingerir: contiene alcaloides potencialmente tóxicos."},
  {id:30,nome:"Margarita",cientifico:"Leucanthemum vulgare",categoria:"Flores",descripcion:"Planta de flores blancas con centro amarillo y aspecto clásico de jardín.",cultivo:"Crece en suelo bien drenado y espacios ventilados.",luz:"Sol directo o semisombra ligera.",riego:"Moderado, especialmente durante periodos secos.",cuidado:"Retira flores marchitas y divide las matas cuando estén muy densas."}
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
  <footer>HERBARIO DE CASA · CONOCE • CULTIVA • CONSERVA</footer>
`;

const contenido = document.getElementById("contenido");

function mostrarPlantas(filtro = "", soloFavoritos = false) {
  const encontradas = plantas.filter(planta => {
    const texto = (
      planta.nome + " " +
      planta.cientifico + " " +
      planta.categoria
    ).toLowerCase();

    return texto.includes(filtro.toLowerCase()) &&
      (!soloFavoritos || favoritos.includes(planta.id));
  });

  contenido.innerHTML = `
    <h2>${soloFavoritos ? "Mis favoritos" : "Biblioteca botánica"}</h2>
    <p>${plantas.length} plantas disponibles</p>
    <input class="search" id="busqueda" type="search"
      placeholder="Buscar una planta...">
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
      <h3>Cuidados y observaciones</h3>
      <p>${planta.cuidado}</p>
      <button id="favorito">
        ${esFavorita ? "★ Quitar de favoritos" : "☆ Añadir a favoritos"}
      </button>
    </article>
    <p><small>
      Información orientativa de jardinería. Los nombres comunes
      pueden variar según la región. Confirma la identidad botánica
      antes de cualquier uso. Estas fichas no son indicaciones de
      consumo ni tratamientos médicos. Verifica la seguridad de cada
      especie para niños y mascotas.
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
  const boton = event.target.closest("[data-plant-id]");
  if (boton) {
    mostrarFicha(Number(boton.dataset.plantId));
  }
});

mostrarPlantas();
