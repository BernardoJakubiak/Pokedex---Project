const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
var pokemonCollection = [];
console.log(pokemonCollection);

var pokemonObjectList = require('./pokemons.js');

const axios = require('axios');

for (let i = 1; i <= pokemonObjectList.length; i++) {
    let pokemonUrl = apiUrl + pokemonObjectList[i];

    axios.get(pokemonUrl)
  .then(response => {
    // Manipule os dados da resposta (response.data)
    console.log('Dados da resposta:\n', response.data);
    let pokemonData = response.data;
    let pokemonType = document.getElementById();
    const pokemonDiv = document.createElement('div');
    pokemonDiv.innerHTML = `${pokemonData.name}`;

    // Adicione o elemento ao DOM
    document.body.appendChild(pokemonDiv);
  })
  .catch(error => {
    // Manipule erros da requisição
    console.error('Erro na requisição:', error);
  });
}

async function fetchPokemonData(pokemonUrl) {
    try {
        var pokemon = { name: "", id: "", height: 0, weight: 0, power: 0 };
        var response = await fetch(pokemonUrl);
        var data = await response.json();
        pokemon.name = data.name;
        pokemon.id = data.id;
        pokemon.height = data.height;
        pokemon.weight = data.weight;
        pokemon.sprites= data.sprites;
        pokemon.power = data.height;
        pokemonCollection.push(pokemon);
        showCards(pokemonCollection.indexOf(pokemon));
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

function getPokemonByName(pokemonName) {
    let pokemonUrl = apiUrl + pokemonName;
    return fetchPokemonData(pokemonUrl);
}

$( document ).ready(function() {
    $("#cartaPokemon1").hide();
    $("#cartaPokemonResultado").hide();
    $("#cartaPokemon2").hide();
    $("#fightResult").hide();
});

function showCards(typeCard){
    let pokemon1 = pokemonCollection[0];
    let pokemon2 = pokemonCollection[1];
    switch (typeCard){
        case 0:
            document.getElementById('imgPokemon1').src= pokemon1.sprites.front_default;
            document.getElementById('namePokemon1').textContent = pokemon1.name;
            document.getElementById('idPokemon1').textContent = pokemon1.id;
            document.getElementById('heightPokemon1').textContent = pokemon1.height * 10;
            document.getElementById('weightPokemon1').textContent = pokemon1.weight / 10;
            $("#cartaPokemon1").show();
            break;
        case 1:
            document.getElementById('imgPokemon2').src= pokemon2.sprites.front_default;
            document.getElementById('namePokemon2').textContent = pokemon2.name;
            document.getElementById('idPokemon2').textContent = pokemon2.id;
            document.getElementById('heightPokemon2').textContent = pokemon2.height * 10;
            document.getElementById('weightPokemon2').textContent = pokemon2.weight / 10;
            $("#cartaPokemon2").show();
            break;
        default:
            break;
    }
    return;
}

function compareStats() {
    let pokemon1 = pokemonCollection[0];
    let pokemon2 = pokemonCollection[1];

    //comparando altura
    if (pokemon1.height - pokemon2.height < 0){
        document.getElementById("result").textContent = pokemon2.name+ " é maior que " + pokemon1.name;
        console.log(pokemon2.name + " é maior que " + pokemon1.name);  
    } else if (pokemon1.height - pokemon2.height > 0){
        document.getElementById("result").textContent = pokemon1.name + " é maior que " + pokemon2.name;
        console.log(pokemon1.name + " é maior que " + pokemon2.name);
    } else {
        document.getElementById("result").textContent = pokemon1.name + " tem a mesma altura que " + pokemon2.name;
        console.log(pokemon1.name + " tem a mesma altura que " + pokemon2.name);
    }

    document.getElementById("result").textContent += "\n";

    //comparando peso
    if (pokemon1.weight < pokemon2.weight){
        document.getElementById("result").textContent += pokemon2.name + " é mais pesado que " + pokemon1.name;
        console.log(pokemon2.name + " é mais pesado que " + pokemon1.name);  
    } else if (pokemon1.weight > pokemon2.weight > 0){
        document.getElementById("result").textContent += pokemon1.name + " é mais pesado que " + pokemon2.name;
        console.log(pokemon1.name + " é mais pesado que " + pokemon2.name);
    } else {
        document.getElementById("result").textContent += pokemon1.name + " tem o mesmo peso que " + pokemon2.name;
        console.log(pokemon1.name + " tem o mesmo peso que " + pokemon2.name);
    }

    $("#cartaPokemonResultado").show();
    return;
}

function fight() {
    let pokemon1 = pokemonCollection[0];
    let pokemon2 = pokemonCollection[1];

    // comparando poder
    if (pokemon1.power < pokemon2.power){
        document.getElementById("result").innerText = pokemon2.name + " GANHOU!!!";
        console.log(pokemon2.name + " GANHOU!!!");  
    } else if (pokemon1.power > pokemon2.power){
        document.getElementById("result").innerText = pokemon2.name + " GANHOU!!!";
        console.log(pokemon1.name + " GANHOU!!!");
    } else {
        document.getElementById("result").innerText = "EMPATE!";
        console.log("EMPATE!");
    }
    $("#cartaPokemonResultado").show();
    return;
}