

const plantas = [
  { nome: "Manzanilla", categoria: "Flores", descricao: "Planta aromática tradicionalmente utilizada em infusões." },
  { nome: "Romero", categoria: "Aromáticas", descricao: "Planta aromática perene, apreciada na cozinha e no jardim." },
  { nome: "Menta", categoria: "Aromáticas", descricao: "Planta de aroma fresco, cultivada em vasos e jardins." },
  { nome: "Lavanda", categoria: "Flores", descricao: "Planta aromática conhecida por suas flores perfumadas." },
  { nome: "Aloe vera", categoria: "Suculentas", descricao: "Planta suculenta que necessita de solo bem drenado." }
];

const app = document.getElementById("app");

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
      <button data-section="calendario">Calendario</button>
      <button data-section="diario">Mi diario</button>
      <button data-section="biblioteca">Biblioteca</button>
    </nav>

    <section id="contenido">
      <h2>Biblioteca botánica</h2>
      <input
        class="search"
        id="busqueda"
        type="search"
        placeholder="Buscar una planta..."
      >
      <div id="lista-plantas"></div>
    </section>
  </main>

  <footer>
    HERBARIO DE CASA · CONOCE • CULTIVA • CONSERVA
  </footer>
`;

function mostrarPlantas(filtro = "") {
  const lista = document.getElementById("lista-plantas");

  const encontradas = plantas.filter(planta =>
    planta.nome?.toLowerCase().includes(filtro.toLowerCase()) ||
    planta.nome?.toLowerCase().includes(filtro.toLowerCase())
  );

  lista.innerHTML = encontradas.map(planta => `
    <article class="card">
      <h3>${planta.nome}</h3>
      <p>${planta.categoria}</p>
      <p>${planta.descricao}</p>
    </article>
  `).join("");
}

document.getElementById("busqueda").addEventListener("input", event => {
  mostrarPlantas(event.target.value);
});

document.querySelectorAll("[data-section]").forEach(button => {
  button.addEventListener("click", () => {
    const seccion = button.dataset.section;
    document.getElementById("contenido").innerHTML = `
      <h2>${button.textContent}</h2>
      <p>Próximamente: ${seccion} de HERBARIO DE CASA.</p>
    `;
  });
});

mostrarPlantas();
