const apiUrl = 'https://pokeapi.co/';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao buscar dados da API');
    }
    return response.json();
  })
  .then(data => {
    // Faça algo com os dados retornados da API
    var heading = document.createElement("h1");
    var heading_text = document.createTextNode(data);
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    console.log(data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });