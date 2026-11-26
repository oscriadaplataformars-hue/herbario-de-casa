const plantas = [
  {id:1,nome:"Manzanilla",cientifico:"Matricaria chamomilla",categoria:"Flores",descricao:"Planta aromática de flores pequeñas y delicadas.",luz:"Sol directo o semisombra.",riego:"Moderado; deja secar ligeramente la superficie del sustrato.",cuidado:"Utiliza un suelo ligero y bien drenado. Retira las flores secas.",seguridad:"Confirma la identificación de la especie. Puede causar reacciones alérgicas."},
  {id:2,nome:"Romero",cientifico:"Salvia rosmarinus",imagen:"ativos/93047667-4640-44DC-A6D8-ADB434451285.png",categoria:"Aromáticas",descricao:"Arbusto aromático de hojas estrechas y resistentes.",luz:"Sol directo, al menos 6 horas.",riego:"Escaso; evita el encharcamiento.",cuidado:"Prefiere suelo arenoso y buen drenaje. Poda suavemente para mantener su forma.",seguridad:"No confundas especies de aspecto similar."},

{id:3,nome:"Menta",cientifico:"Mentha × piperita",categoria:"Aromáticas",descricao:"Planta aromática de hojas verdes y aroma intenso.",luz:"Semisombra o sol suave.",riego:"Regular; conserva el sustrato ligeramente húmedo.",cuidado:"Cultívala en maceta para controlar su crecimiento expansivo.",seguridad:"Puede irritar a personas sensibles."},
  {id:4,nome:"Lavanda",cientifico:"Lavandula angustifolia",categoria:"Flores",descricao:"Planta aromática con flores violetas y agradable fragancia.",luz:"Sol directo abundante.",riego:"Bajo; deja secar el sustrato entre riegos.",cuidado:"Necesita suelo ligero y drenaje excelente. Poda después de la floración.",seguridad:"El aceite esencial concentrado puede irritar la piel."},
  {id:5,nome:"Aloe vera",cientifico:"Aloe vera",categoria:"Suculentas",descricao:"Planta suculenta de hojas carnosas que almacena agua.",luz:"Luz brillante y algunas horas de sol.",riego:"Escaso; riega solo cuando el sustrato esté seco.",cuidado:"Utiliza maceta con drenaje y sustrato para cactus.",seguridad:"La savia amarilla y ciertas partes pueden ser tóxicas si se ingieren. No consumir."},
  {id:6,nome:"Albahaca",cientifico:"Ocimum basilicum",categoria:"Aromáticas",descricao:"Planta aromática de hojas suaves y fragantes.",luz:"Sol de mañana o luz abundante.",riego:"Regular, sin encharcar.",cuidado:"Pinza las puntas para favorecer un crecimiento compacto. Protégela del frío.",seguridad:"Identifica correctamente la especie antes de cualquier uso."},
  {id:7,nome:"Orégano",cientifico:"Origanum vulgare",categoria:"Aromáticas",descricao:"Hierba perenne de hojas pequeñas y aroma característico.",luz:"Sol directo.",riego:"Moderado a bajo.",cuidado:"Crece bien en sustratos drenantes. Recorta las ramas para estimular nuevos brotes.",seguridad:"Puede provocar sensibilidad en personas alérgicas."},
  {id:8,nome:"Tomillo",cientifico:"Thymus vulgaris",categoria:"Aromáticas",descricao:"Pequeño arbusto aromático de hojas diminutas.",luz:"Sol directo abundante.",riego:"Escaso; evita la humedad constante.",cuidado:"Prefiere macetas con buen drenaje y suelo poco compacto.",seguridad:"Los aceites esenciales concentrados pueden causar irritación."},
  {id:9,nome:"Salvia",cientifico:"Salvia officinalis",categoria:"Aromáticas",descricao:"Planta aromática de hojas aterciopeladas y tono gris verdoso.",luz:"Sol directo.",riego:"Moderado a bajo, una vez establecida.",cuidado:"Evita el exceso de agua y poda las ramas envejecidas.",seguridad:"No ingieras preparados concentrados."},
  {id:10,nome:"Perejil",cientifico:"Petroselinum crispum",categoria:"Aromáticas",descricao:"Hierba de hojas verdes y tallos delicados.",luz:"Sol suave o semisombra.",riego:"Regular; no dejes secar completamente el sustrato.",cuidado:"Siembra en suelo fértil y cosecha las hojas exteriores.",seguridad:"No confundas el perejil con otras plantas silvestres parecidas."},
  {id:11,nome:"Cilantro",cientifico:"Coriandrum sativum",categoria:"Aromáticas",descricao:"Planta anual de hojas finas y crecimiento rápido.",luz:"Sol de mañana y semisombra en climas cálidos.",riego:"Regular y equilibrado.",cuidado:"Siembra directamente en su ubicación definitiva. Evita el calor excesivo.",seguridad:"Confirma la identificación antes de recolectar plantas silvestres."},
  {id:12,nome:"Caléndula",cientifico:"Calendula officinalis",categoria:"Flores",descricao:"Planta de flores amarillas o anaranjadas muy vistosas.",luz:"Sol directo o semisombra luminosa.",riego:"Moderado.",cuidado:"Retira las flores marchitas para prolongar la floración.",seguridad:"Puede causar dermatitis de contacto o alergias."},
  {id:13,nome:"Rosa",cientifico:"Rosa spp.",categoria:"Flores",descricao:"Arbusto ornamental conocido por sus flores y variedad de colores.",luz:"Sol directo, preferiblemente 6 horas o más.",riego:"Regular, dirigido a la base de la planta.",cuidado:"Poda las ramas secas y favorece la circulación del aire.",seguridad:"Sus espinas pueden causar heridas."},
  {id:14,nome:"Geranio",cientifico:"Pelargonium × hortorum",categoria:"Flores",descricao:"Planta ornamental de floración abundante.",luz:"Sol suave o luz brillante.",riego:"Moderado; deja secar ligeramente la superficie.",cuidado:"Retira flores marchitas y utiliza macetas con drenaje.",seguridad:"Algunas variedades pueden resultar tóxicas para mascotas."},
  {id:15,nome:"Hibisco",cientifico:"Hibiscus rosa-sinensis",categoria:"Flores",descricao:"Arbusto tropical de flores grandes y coloridas.",luz:"Sol directo o semisombra muy luminosa.",riego:"Regular, especialmente en épocas calurosas.",cuidado:"Necesita suelo fértil, drenaje y protección contra el frío.",seguridad:"No todas las especies de hibisco tienen los mismos usos."},
  {id:16,nome:"Jazmín",cientifico:"Jasminum officinale",categoria:"Flores",descricao:"Planta trepadora de flores blancas y fragancia delicada.",luz:"Sol suave o semisombra luminosa.",riego:"Moderado; aumenta en periodos cálidos.",cuidado:"Ofrece un soporte para trepar y poda después de la floración.",seguridad:"No confundas el jazmín verdadero con plantas de nombre común similar."},
  {id:17,nome:"Cactus",cientifico:"Cactaceae",categoria:"Suculentas",descricao:"Grupo de plantas adaptadas a ambientes secos y con espinas.",luz:"Luz abundante; depende de la especie.",riego:"Escaso, solo cuando el sustrato esté seco.",cuidado:"Usa sustrato mineral y maceta con orificios de drenaje.",seguridad:"Las espinas pueden causar lesiones. Manipula con guantes."},
  {id:18,nome:"Monstera",cientifico:"Monstera deliciosa",categoria:"Ornamentales",descricao:"Planta tropical de hojas grandes y naturalmente perforadas.",luz:"Luz indirecta brillante.",riego:"Cuando la capa superior del sustrato esté seca.",cuidado:"Agradece la humedad ambiental y un soporte para crecer.",seguridad:"Contiene cristales de oxalato de calcio y es irritante si se ingiere."},
  {id:19,nome:"Cóleo",cientifico:"Coleus scutellarioides",categoria:"Ornamentales",descricao:"Planta ornamental apreciada por sus hojas de muchos colores.",luz:"Luz indirecta brillante o sol suave.",riego:"Regular; evita que el sustrato se seque por completo.",cuidado:"Pellizca las puntas para estimular una forma frondosa.",seguridad:"Puede ser tóxica para mascotas si se ingiere."},
  {id:20,nome:"Violeta africana",cientifico:"Streptocarpus ionanthus",categoria:"Flores",descricao:"Planta compacta de hojas aterciopeladas y flores delicadas.",luz:"Luz indirecta, sin sol fuerte.",riego:"Moderado; evita mojar las hojas y el centro de la planta.",cuidado:"Usa sustrato ligero y maceta pequeña con drenaje.",seguridad:"Evita el exceso de humedad y la acumulación de agua."},
  {id:21,nome:"Ruda",cientifico:"Ruta graveolens",categoria:"Aromáticas",descricao:"Planta de follaje verde azulado y aroma intenso.",luz:"Sol directo o semisombra.",riego:"Bajo a moderado; evita el encharcamiento.",cuidado:"Prefiere suelo drenante y poda ligera.",seguridad:"La savia puede irritar la piel y causar fotosensibilidad. No ingerir."},
  {id:22,nome:"Hierbabuena",cientifico:"Mentha spicata",categoria:"Aromáticas",descricao:"Planta aromática de hojas verdes y crecimiento vigoroso.",luz:"Sol suave o semisombra.",riego:"Regular; mantener el sustrato ligeramente húmedo.",cuidado:"Cultívala en maceta para limitar sus raíces expansivas.",seguridad:"Puede causar sensibilidad en algunas personas."},
  {id:23,nome:"Stevia",cientifico:"Stevia rebaudiana",categoria:"Aromáticas",descricao:"Planta de hojas verdes y crecimiento arbustivo.",luz:"Sol de mañana o semisombra luminosa.",riego:"Regular, sin dejar agua acumulada.",cuidado:"Prefiere suelo fértil y temperaturas cálidas. Protege del frío.",seguridad:"Esta ficha es de jardinería; no constituye recomendación de consumo."},
  {id:24,nome:"Hierba limón",cientifico:"Cymbopogon citratus",categoria:"Aromáticas",descricao:"Planta de hojas largas y estrechas que forma matas.",luz:"Sol directo abundante.",riego:"Regular durante el crecimiento.",cuidado:"Necesita espacio, suelo fértil y protección frente a heladas.",seguridad:"Los bordes de las hojas pueden ser cortantes."},
  {id:25,nome:"Diente de león",cientifico:"Taraxacum officinale",categoria:"Flores",descricao:"Planta de flores amarillas y semillas que se dispersan con el viento.",luz:"Sol o semisombra.",riego:"Moderado; tolera periodos cortos de sequía.",cuidado:"Crece en suelos diversos y puede expandirse mediante semillas.",seguridad:"Puede confundirse con otras especies. Algunas personas presentan alergias."},
  {id:26,nome:"Milenrama",cientifico:"Achillea millefolium",categoria:"Flores",descricao:"Planta perenne con hojas finas y grupos de pequeñas flores.",luz:"Sol directo.",riego:"Bajo a moderado una vez establecida.",cuidado:"Prefiere suelo bien drenado. Retira flores marchitas.",seguridad:"Puede causar reacciones alérgicas o sensibilidad cutánea."},
  {id:27,nome:"Equinácea",cientifico:"Echinacea purpurea",categoria:"Flores",descricao:"Planta ornamental con flores de pétalos rosados y centro prominente.",luz:"Sol directo.",riego:"Moderado durante el establecimiento.",cuidado:"Necesita suelo drenante y espacio para desarrollarse.",seguridad:"Puede provocar alergias. Esta ficha no recomienda usos medicinales."},
  {id:28,nome:"Borraja",cientifico:"Borago officinalis",categoria:"Flores",descricao:"Planta de hojas ásperas y flores azules en forma de estrella.",luz:"Sol o semisombra.",riego:"Moderado.",cuidado:"Prefiere suelo fértil y espacio suficiente para crecer.",seguridad:"Contiene alcaloides que pueden ser perjudiciales para el hígado. No ingerir."},
  {id:29,nome:"Consuelda",cientifico:"Symphytum officinale",categoria:"Flores",descricao:"Planta perenne de hojas grandes y flores colgantes.",luz:"Sol suave o semisombra.",riego:"Regular, especialmente en suelos secos.",cuidado:"Necesita espacio y suelo húmedo con buen drenaje.",seguridad:"Contiene alcaloides pirrolizidínicos potencialmente tóxicos. No ingerir."},
  {id:30,nome:"Margarita",cientifico:"Leucanthemum vulgare",categoria:"Flores",descricao:"Planta de flores blancas con centro amarillo.",luz:"Sol directo o semisombra.",riego:"Moderado; evita el encharcamiento.",cuidado:"Retira flores secas y divide las matas cuando sea necesario.",seguridad:"No todas las margaritas pertenecen a la misma especie. Confirma su identificación."},
  {id:31,nome:"Ortiga",cientifico:"Urtica dioica",categoria:"Flores",descricao:"Planta de hojas dentadas y tallos cubiertos de pelos urticantes.",luz:"Sol suave o semisombra.",riego:"Regular; prefiere suelo con cierta humedad.",cuidado:"Crece con facilidad y puede extenderse por rizomas.",seguridad:"Sus pelos producen irritación y ardor al contacto. Manipula con guantes. No ingerir."},
  {id:32,nome:"Dalia",cientifico:"Dahlia pinnata",categoria:"Flores",descricao:"Planta ornamental de flores grandes y gran variedad de colores.",luz:"Sol directo, preferiblemente por la mañana.",riego:"Regular, sin encharcar.",cuidado:"Utiliza suelo fértil, tutor para variedades altas y retira flores marchitas.",seguridad:"Algunas partes pueden causar molestias digestivas a mascotas."},
  {id:33,nome:"Girasol",cientifico:"Helianthus annuus",categoria:"Flores",descricao:"Planta alta de grandes flores amarillas.",luz:"Sol directo abundante.",riego:"Regular, especialmente durante el crecimiento.",cuidado:"Siembra en un lugar amplio y protegido de vientos fuertes.",seguridad:"Proporciona espacio y soporte si la planta alcanza gran altura."},
  {id:34,nome:"Zinnia",cientifico:"Zinnia elegans",categoria:"Flores",descricao:"Planta anual de flores coloridas y floración prolongada.",luz:"Sol directo.",riego:"Moderado, evitando mojar constantemente las hojas.",cuidado:"Deja espacio entre plantas para mejorar la circulación del aire.",seguridad:"Puede causar sensibilidad en personas alérgicas."},
  {id:35,nome:"Petunia",cientifico:"Petunia × atkinsiana",categoria:"Flores",descricao:"Planta ornamental de flores abundantes y variados colores.",luz:"Sol directo o luz muy brillante.",riego:"Regular; aumenta en días calurosos.",cuidado:"Retira flores marchitas y utiliza sustrato fértil con drenaje.",seguridad:"Evita la ingestión de plantas ornamentales."},
  {id:36,nome:"Crisantemo",cientifico:"Chrysanthemum × morifolium",categoria:"Flores",descricao:"Planta ornamental de flores densas y numerosos colores.",luz:"Sol suave o semisombra luminosa.",riego:"Regular, sin encharcar.",cuidado:"Retira flores marchitas y evita humedad excesiva en las hojas.",seguridad:"Puede ser tóxico para perros y gatos."},
  {id:37,nome:"Begonia",cientifico:"Begonia semperflorens",categoria:"Ornamentales",descricao:"Planta ornamental de hojas brillantes y flores pequeñas.",luz:"Semisombra o luz indirecta brillante.",riego:"Moderado; deja secar ligeramente la superficie.",cuidado:"Protege del sol intenso y de las bajas temperaturas.",seguridad:"Algunas partes de ciertas begonias son tóxicas si se ingieren."},
  {id:38,nome:"Helecho de Boston",cientifico:"Nephrolepis exaltata",categoria:"Ornamentales",descricao:"Helecho de frondas largas y arqueadas.",luz:"Luz indirecta y ambiente húmedo.",riego:"Frecuente, manteniendo el sustrato ligeramente húmedo.",cuidado:"Evita el sol directo y las corrientes de aire seco.",seguridad:"Confirma la especie antes de cualquier uso."},
  {id:39,nome:"Cinta",cientifico:"Chlorophytum comosum",categoria:"Ornamentales",descricao:"Planta de hojas largas y arqueadas, a menudo con franjas claras.",luz:"Luz indirecta brillante o semisombra.",riego:"Moderado; deja secar la capa superior entre riegos.",cuidado:"Produce pequeñas plantas colgantes que pueden propagarse.",seguridad:"Evita que las mascotas mastiquen plantas ornamentales."},
  {id:40,nome:"Poto",cientifico:"Epipremnum aureum",categoria:"Ornamentales",descricao:"Planta trepadora de hojas verdes, a menudo con manchas amarillas.",luz:"Luz indirecta; tolera luz media.",riego:"Cuando la parte superior del sustrato esté seca.",cuidado:"Puede crecer en maceta colgante o con tutor. Poda para controlar su tamaño.",seguridad:"Contiene cristales de oxalato de calcio. Es tóxica si se ingiere."},
  {id:41,nome:"Aloe arbórea",cientifico:"Aloe arborescens",categoria:"Suculentas",descricao:"Suculenta de porte arbustivo, con hojas carnosas y flores agrupadas.",luz:"Sol directo o semisombra luminosa.",riego:"Escaso; deja secar el sustrato entre riegos.",cuidado:"Utiliza suelo arenoso y maceta con excelente drenaje.",seguridad:"La ingestión puede causar molestias y toxicidad. No consumir."},
  {id:42,nome:"Pasiflora",cientifico:"Passiflora caerulea",categoria:"Trepadoras",descricao:"Enredadera ornamental de flores complejas y llamativas.",luz:"Sol directo o semisombra.",riego:"Regular durante el crecimiento.",cuidado:"Proporciona un soporte para trepar y protege de las heladas fuertes.",seguridad:"No consumas frutos ni otras partes sin confirmar la especie y su seguridad."},
  {id:43,nome:"Gardenia",cientifico:"Gardenia jasminoides",categoria:"Flores",descricao:"Arbusto ornamental de flores blancas y fragancia intensa.",luz:"Luz brillante indirecta o sol suave.",riego:"Regular; evita que el sustrato se seque completamente.",cuidado:"Prefiere sustrato ligeramente ácido, húmedo y bien drenado.",seguridad:"Puede causar molestias digestivas a mascotas si se ingiere."},
  {id:44,nome:"Hortensia",cientifico:"Hydrangea macrophylla",categoria:"Flores",descricao:"Arbusto ornamental con grandes grupos de flores de diversos colores.",luz:"Semisombra y protección del sol intenso.",riego:"Frecuente, manteniendo humedad sin encharcar.",cuidado:"Necesita suelo rico en materia orgánica y poda adecuada a su variedad.",seguridad:"Contiene sustancias tóxicas. No ingerir y mantener lejos de niños y mascotas."},
  {id:45,nome:"Anturio",cientifico:"Anthurium andraeanum",categoria:"Ornamentales",descricao:"Planta tropical de hojas verdes y flores brillantes en forma de corazón.",luz:"Luz indirecta brillante.",riego:"Moderado; evita el exceso de agua.",cuidado:"Prefiere humedad ambiental y sustrato aireado.",seguridad:"Contiene cristales de oxalato de calcio. Es irritante y tóxico si se ingiere."},
  {id:46,nome:"Calatea",cientifico:"Goeppertia orbifolia",categoria:"Ornamentales",descricao:"Planta tropical conocida por sus hojas grandes con dibujos plateados.",luz:"Luz indirecta y semisombra.",riego:"Regular, manteniendo humedad moderada.",cuidado:"Evita corrientes de aire y ambientes muy secos.",seguridad:"Evita que niños o mascotas mastiquen plantas ornamentales."},
  {id:47,nome:"Orquídea mariposa",cientifico:"Phalaenopsis amabilis",categoria:"Flores",descricao:"Orquídea de flores elegantes y duraderas.",luz:"Luz indirecta brillante.",riego:"Cuando las raíces y el sustrato estén casi secos.",cuidado:"Usa sustrato especial para orquídeas y maceta ventilada.",seguridad:"No utilices productos químicos sin seguir sus instrucciones."},
  {id:48,nome:"Romero rastrero",cientifico:"Salvia rosmarinus prostratus",categoria:"Aromáticas",descricao:"Forma rastrera del romero, con ramas que crecen extendidas y pueden colgar de macetas o muros.",luz:"Sol directo abundante.",riego:"Escaso; deja secar el sustrato entre riegos.",cuidado:"Ideal para macetas colgantes y bordes de jardín. Necesita drenaje excelente.",seguridad:"La identificación de variedades puede variar. No ingerir aceites esenciales concentrados."},
  {id:49,nome:"Capuchina",cientifico:"Tropaeolum majus",categoria:"Flores",descricao:"Planta de flores coloridas y hojas redondeadas, ideal para jardines.",luz:"Sol suave o semisombra.",riego:"Moderado; evita el exceso de fertilizante.",cuidado:"Puede crecer como planta rastrera o trepadora. Retira flores marchitas.",seguridad:"Puede causar reacciones alérgicas. No consumir basándose únicamente en esta ficha."},
  {id:50,nome:"Cosmos",cientifico:"Cosmos bipinnatus",categoria:"Flores",descricao:"Planta anual de flores delicadas y follaje fino.",luz:"Sol directo abundante.",riego:"Moderado; tolera cierta sequía una vez establecida.",cuidado:"Siembra en suelo drenante y evita fertilizar en exceso.",seguridad:"Confirma la identificación antes de manipular plantas silvestres."}
];

const app = document.getElementById("app");
let favoritos = JSON.parse(localStorage.getItem("herbario-favoritos") || "[]");
let vistaActual = "plantas";
let busquedaActual = "";

function guardarFavoritos() {
  localStorage.setItem("herbario-favoritos", JSON.stringify(favoritos));
}

function escapar(texto) {
  return String(texto).replace(/[&<>"']/g, caracter => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  })[caracter]);
}

function iniciar() {
  app.innerHTML = `
    <header>
      <h1>HERBARIO DE CASA</h1>
      <p>CONOCE • CULTIVA • CONSERVA</p>
      <small>ENCICLOPEDIA BOTÁNICA • EDICIÓN DIGITAL</small>
    </header>
    <main>
      <nav class="menu">
        <button data-vista="plantas">Plantas</button>
        <button data-vista="favoritos">Favoritos</button>
        <button data-vista="calendario">Calendario</button>
        <button data-vista="diario">Mi diario</button>
        <button data-vista="biblioteca">Biblioteca</button>
      </nav>
      <section id="contenido"></section>
    </main>
    <footer>HERBARIO DE CASA · CONOCE • CULTIVA • CONSERVA</footer>
  `;

  app.querySelectorAll("[data-vista]").forEach(boton => {
    boton.addEventListener("click", () => mostrarSeccion(boton.dataset.vista));
  });

  mostrarSeccion("plantas");
}

function mostrarSeccion(vista) {
  vistaActual = vista;
  const contenido = document.getElementById("contenido");

  if (vista === "plantas" || vista === "favoritos") {
    mostrarPlantas();
    return;
  }

  if (vista === "calendario") {
    contenido.innerHTML = `
      <div class="card">
        <h2>Calendario de cultivo</h2>
        <p>Organiza las tareas de tu jardín a lo largo del año.</p>
        <p>🌱 Primavera: prepara el sustrato y comienza nuevas siembras.</p>
        <p>☀️ Verano: observa la humedad y protege las plantas del calor intenso.</p>
        <p>🍂 Otoño: retira hojas secas y prepara las plantas para el cambio de clima.</p>
        <p>❄️ Invierno: protege las especies sensibles al frío.</p>
        <small>Las épocas de siembra dependen de la especie y del clima local.</small>
      </div>`;
    return;
  }

  if (vista === "diario") {
    contenido.innerHTML = `
      <div class="card">
        <h2>Mi diario de cultivo</h2>
        <p>Registra tus observaciones y avances en el jardín.</p>
        <label for="diario-fecha">Fecha</label>
        <input class="search" id="diario-fecha" type="date">
        <label for="diario-texto">Notas de cultivo</label>
        <textarea class="search" id="diario-texto" rows="5" placeholder="¿Qué observaste hoy en tus plantas?"></textarea>
        <button id="guardar-nota">Guardar nota</button>
        <div id="notas-guardadas"></div>
      </div>`;

    const notas = JSON.parse(localStorage.getItem("herbario-diario") || "[]");
    const lista = document.getElementById("notas-guardadas");
    lista.innerHTML = notas.map(n => `
      <div class="card"><strong>${escapar(n.fecha)}</strong><p>${escapar(n.texto)}</p></div>
    `).join("");

    document.getElementById("guardar-nota").addEventListener("click", () => {
      const fecha = document.getElementById("diario-fecha").value;
      const texto = document.getElementById("diario-texto").value.trim();
      if (!fecha || !texto) {
        alert("Completa la fecha y tus notas antes de guardar.");
        return;
      }
      notas.unshift({fecha,texto});
      localStorage.setItem("herbario-diario", JSON.stringify(notas));
      mostrarSeccion("diario");
    });
    return;
  }

  if (vista === "biblioteca") {
    contenido.innerHTML = `
      <div class="card">
        <h2>Biblioteca</h2>
        <p>Tu espacio de consulta y materiales de aprendizaje.</p>
        <p>📖 Guía botánica: fichas de las 50 plantas disponibles en esta versión.</p>
        <p>🌿 Aprende sobre identificación, cultivo y conservación.</p>
        <p><small>Los libros y materiales descargables se incorporarán en una próxima etapa.</small></p>
      </div>`;
  }
}

function mostrarPlantas() {
  const contenido = document.getElementById("contenido");
  const esFavoritos = vistaActual === "favoritos";

  contenido.innerHTML = `
    <h2>${esFavoritos ? "Mis plantas favoritas" : "Colección botánica"}</h2>
    <p>${esFavoritos ? "Tus fichas guardadas." : "Explora las especies de tu herbario."}</p>
    ${!esFavoritos ? `<input id="busqueda" class="search" type="search" placeholder="Buscar una planta..." value="${escapar(busquedaActual)}">` : ""}
    <p id="contador"></p>
    <div id="lista-plantas"></div>
  `;

  const campo = document.getElementById("busqueda");
  if (campo) {
    campo.addEventListener("input", () => {
      busquedaActual = campo.value;
      dibujarTarjetas();
    });
  }
  dibujarTarjetas();
}

function dibujarTarjetas() {
  const lista = document.getElementById("lista-plantas");
  const contador = document.getElementById("contador");
  if (!lista) return;

  let resultado = vistaActual === "favoritos"
    ? plantas.filter(p => favoritos.includes(p.id))
    : plantas.filter(p => {
        const texto = (p.nome + " " + p.cientifico + " " + p.categoria).toLowerCase();
        return texto.includes(busquedaActual.toLowerCase());
      });

  contador.textContent = `${resultado.length} plantas disponibles`;

  if (resultado.length === 0) {
    lista.innerHTML = `<div class="card"><p>No se encontraron plantas.</p></div>`;
    return;
  }

  lista.innerHTML = resultado.map(p => `
    <article class="card">
      <p class="categoria">${escapar(p.categoria)}</p>
      <h3>${escapar(p.nome)}</h3>
      <p><em>${escapar(p.cientifico)}</em></p>
      <p>${escapar(p.descricao)}</p>
      <button data-abrir="${p.id}">Ver ficha botánica</button>
      <button data-favorito="${p.id}">${favoritos.includes(p.id) ? "★ Favorito" : "☆ Añadir a favoritos"}</button>
    </article>
  `).join("");

  lista.querySelectorAll("[data-abrir]").forEach(boton => {
    boton.addEventListener("click", () => abrirFicha(Number(boton.dataset.abrir)));
  });

  lista.querySelectorAll("[data-favorito]").forEach(boton => {
    boton.addEventListener("click", () => cambiarFavorito(Number(boton.dataset.favorito)));
  });
}

function cambiarFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(f => f !== id);
  } else {
    favoritos.push(id);
  }
  guardarFavoritos();
  if (vistaActual === "favoritos") {
    mostrarPlantas();
  } else {
    dibujarTarjetas();
  }
}

function abrirFicha(id) {
  const planta = plantas.find(p => p.id === id);
  if (!planta) return;

  const contenido = document.getElementById("contenido");
  contenido.innerHTML = `
    <button id="volver">← Volver a las plantas</button>
    <article class="card">
      <p class="categoria">${escapar(planta.categoria)}</p>
      <h2>${escapar(planta.nome)}</h2>
      <p><em>${escapar(planta.cientifico)}</em></p>
      <div class="card">
        <h3>Descripción botánica</h3>
        <p>${escapar(planta.descricao)}</p>
      </div>
      <div class="card">
        <h3>☀️ Luz</h3>
        <p>${escapar(planta.luz)}</p>
      </div>
      <div class="card">
        <h3>💧 Riego</h3>
        <p>${escapar(planta.riego)}</p>
      </div>
      <div class="card">
        <h3>🌱 Cuidados y cultivo</h3>
        <p>${escapar(planta.cuidado)}</p>
      </div>
      <div class="card">
        <h3>⚠️ Seguridad</h3>
        <p>${escapar(planta.seguridad)}</p>
      </div>
      <button id="ficha-favorito">${favoritos.includes(id) ? "★ Quitar de favoritos" : "☆ Añadir a favoritos"}</button>
    </article>
    <p><small>Información general de jardinería. Los nombres comunes pueden variar según la región. Verifica la identificación botánica antes de manipular cualquier planta. Esta guía no ofrece recomendaciones médicas ni de consumo.</small></p>
  `;

  document.getElementById("volver").addEventListener("click", () => mostrarSeccion(vistaActual));
  document.getElementById("ficha-favorito").addEventListener("click", () => {
    cambiarFavorito(id);
    abrirFicha(id);
  });
}

iniciar();
