
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    // Pegando os tipos
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types; // Pegando o primeiro tipo como principal

    // Pegando estatísticas (nomes e valores)
    const stats = pokeDetail.stats.map((stat) => stat.stat.name);
    const statsNum = pokeDetail.stats.map((stat) => stat.base_stat);

    pokemon.types = types;
    pokemon.type = type;
    pokemon.stats = stats;
    pokemon.statsNum = statsNum;

    // Pegando a imagem do Pokémon
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}
