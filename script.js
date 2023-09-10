async function fetchPokemonData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Atualize os elementos HTML com os dados obtidos
        document.getElementById('name').textContent = data.name;
        document.getElementById('id').textContent = data.id;
        document.getElementById('height').textContent = data.height * 10;
        document.getElementById('weight').textContent = data.weight / 10;
        // Adicione outros campos conforme necessário
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

function getPokemonByName(pokemonName) {
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;
    console.log(apiUrl);
    return fetchPokemonData(apiUrl);
}