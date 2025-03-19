const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;


function showDetails(pokeNumber) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
        .then(response => response.json())
        .then(pokeDetail => {
            // Preenchendo o nome e número do Pokémon
            document.getElementById('pokemonName').innerText = pokeDetail.name;
            document.getElementById('pokemonNumber').innerText = `#${pokeDetail.id}`;

            // Definindo a imagem
            document.getElementById('pokemonImage').src = pokeDetail.sprites.other.dream_world.front_default;

            // Preenchendo os tipos do Pokémon com a nova classe 'typesCard'
            const typesContainer = document.getElementById('pokemonTypes');
            typesContainer.innerHTML = ""; // Limpa antes de adicionar os novos
            pokeDetail.types.forEach(type => {
                const li = document.createElement("li");
                li.classList.add(type.type.name);
                li.innerText = type.type.name;
                typesContainer.appendChild(li);
            });

            // Criando barras de status
            const statsContainer = document.getElementById('pokemonStats');
            statsContainer.innerHTML = ""; // Limpa antes de adicionar os novos
            pokeDetail.stats.forEach(stat => {
                const statName = stat.stat.name;
                const baseStat = stat.base_stat;
                const percentage = Math.min((baseStat / 150) * 100, 100); // Calcula a largura da barra, limitando a 100%

                // Criando o elemento do status
                const statElement = document.createElement("div");
                statElement.classList.add("stat");

                // Nome do status
                const statLabel = document.createElement("span");
                statLabel.innerText = statName;

                // Barra de progresso
                const statBarContainer = document.createElement("div");
                statBarContainer.classList.add("stat-bar-container");

                const statBar = document.createElement("div");
                statBar.classList.add("stat-bar");
                statBar.style.width = `${percentage}%`; // Define a largura com base na porcentagem (0 a 100)

                // Adiciona a barra ao container
                statBarContainer.appendChild(statBar);

                // Adiciona os elementos ao statElement
                statElement.appendChild(statLabel);
                statElement.appendChild(statBarContainer);

                // Adiciona o statElement ao statsContainer
                statsContainer.appendChild(statElement);
            });

            // Exibindo o modal
            document.getElementById('pokemonModal').style.display = "flex";
        })
        .catch(error => console.error("Erro ao buscar detalhes do Pokémon:", error));
}

// Evento para fechar o modal ao clicar no botão "X"
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('pokemonModal').style.display = "none";
});

    
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <a href="javascript:void(0);" onclick="showDetails(${pokemon.number})">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
             </div>
            </a>
         </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})