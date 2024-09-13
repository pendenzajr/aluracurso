function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    const regex = new RegExp(campoPesquisa, "i"); // Expressão regular para busca case-insensitive
  
    let resultados = "";
  
    if (!campoPesquisa) {
      section.innerHTML = "<h2>Digite alguma coisa para pesquisar.</h2>";
      return;
    }
  
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
  
  // Adicionando o event listener para a tecla Enter
  const campoPesquisa = document.getElementById("campo-pesquisa");
  campoPesquisa.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      pesquisar();
    }
  });