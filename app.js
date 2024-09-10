function pesquisar() {

    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let olfativa = "";
    let tags = "";

    // se campo de pesquisa for vazio, nao retorna nada
    if(campoPesquisa == "") {
        section.innerHTML = "<h2>Digite alguma coisa no campo de busca</h2>"
        return             
    }
 
    // Itera sobre cada perfume nos dados
    for (let parfum of dados) {    
        nome = parfum.nome.toLowerCase();
        olfativa = parfum.olfativa.toLowerCase();
        tags= parfum.tags.toLowerCase();   
        // se titulo icludes campoPesquisa 
        if(nome.includes(campoPesquisa) || olfativa.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

        // Cria uma nova div para cada perfume e adiciona as informações relevantes
        resultados += `
        <div class="item-resultado">
            <h2>
                <p class="descricao-meta">${parfum.nome}</p>
            </h2>
            <p class="descricao-meta">${parfum.marca + " " + parfum.lancamento}</p>
            <p class="descricao-meta">${parfum.tipo}</p>
            <p class="descricao-meta">${parfum.olfativa}</p>
            <p class="descricao-meta">
                <a href="${parfum.link}" target="_blank" title="Saiba mais" class="botao">Loja online</a>
            </p>
        </div>
    `;
        }
        
    }

    if(!resultados) {
        resultados = "<h2>Nada foi encontrado</h2>"
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}