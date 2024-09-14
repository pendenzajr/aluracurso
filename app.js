function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    const regex = new RegExp(campoPesquisa, "i"); // Expressão regular para busca case-insensitive
  
    let resultados = "";
  
    //Mensagem apresentada caso buscar com o campo em branco
    if (!campoPesquisa) {
      section.innerHTML = "<h2>Digite alguma coisa para pesquisar.</h2>";
      return;
    }
  
    //Utiliza informações do dados.js e apresenta apos a pesquisa
    for (const parfum of dados) {
      const { nome, olfativa, tags, lancamento} = parfum;
      if (nome.match(regex) || olfativa.match(regex) || tags.match(regex) || lancamento.match(regex)) {
        resultados += `
          <div class="item-resultado">
            <h2>${parfum.nome.replace(regex, `<mark>$&</mark>`)}</h2>
            <p class="descricao-meta">${parfum.marca} - ${parfum.lancamento.replace(regex, `<mark>$&</mark>`)}</p>
            <p class="descricao-meta">Família Olfativa: ${parfum.olfativa.replace(regex, `<mark>$&</mark>`)}</p>
            <p class="descricao-meta">
              <a href="${parfum.link}" target="_blank">Saiba mais</a>
            </p>
          </div>
        `;
      }
    }
  
    section.innerHTML = resultados || "<h2>Nenhum perfume encontrado para '" + campoPesquisa + "'.</h2>";
  }

  
//Apresenta textos aleatórios dentro do campo de pesquisa
const placeholders = [
    "Pesquise seu BöRR: Midnight",
    "Pesquise pelo importado: 212",
    "Pesquise por nota: Lavanda",
    "Pesquise por Genero: Masculino"
];

const searchInput = document.getElementById("campo-pesquisa");
let currentPlaceholderIndex = 0;
let shownPlaceholders = [];

function changePlaceholder() {
    // Verifica se todos os placeholders já foram mostrados
    if (shownPlaceholders.length === placeholders.length) {
        shownPlaceholders = []; // Reinicia o array para começar novamente
    }

    // Encontra o próximo placeholder que ainda não foi mostrado
    let nextIndex = currentPlaceholderIndex;
    while (shownPlaceholders.includes(nextIndex)) {
        nextIndex = (nextIndex + 1) % placeholders.length; // Incrementa e faz o módulo para garantir que fique dentro do array
    }

    currentPlaceholderIndex = nextIndex;
    shownPlaceholders.push(nextIndex);

    searchInput.placeholder = placeholders[nextIndex];
}

// Chamar a função pela primeira vez e depois a cada 5 segundos
changePlaceholder();
setInterval(changePlaceholder, 2000);
  
  // Adicionando o event listener para a tecla Enter
  const campoPesquisa = document.getElementById("campo-pesquisa");
  campoPesquisa.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      pesquisar();
    }
  });