//Declare and assign objects to an array with some pokemone details
let pokemonRepository = (function(){
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //API to fetch pokemon info

//function to add pokemon objects into pokemonList array
function add(pokemon){
  if(typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon){
    pokemonList.push(pokemon);
  }
  else{
    console.log('Given information is incorrect!');
  }
}

//function to return all the info from pokemonList arary
function getAll(){
  return pokemonList;
}

//function to create buttons for each pokemon
function addListItem(pokemon){
    let showAllPokemon = document.querySelector('.pokemon-list');
    let pokemonListItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    pokemonListItem.appendChild(button);
    showAllPokemon.appendChild(pokemonListItem);
    //call showDetails() upon button click
    addEventToButton(button,pokemon);
}

//loading pokemon name and url for details from API
function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

//show details for the selected pokemon usimg info from API
function loadDetails(item){
  let url = item.detailsUrl;
  return fetch(url).then(function(response){
    return response.json();
  }).then (function(details){
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e){
    console.error(e);
  });
}

//function to show details of the selected pokemon
function showDetails(pokemon){
  loadDetails(pokemon).then(function(){
    console.log(pokemon);
  });
}
//function to add eventListener to button
function addEventToButton(button,pokemon){
  button.addEventListener('click',function(event){
    showDetails(pokemon);
  });
}

//function to look for a pokemon based on its name
function findPokemon(pokemonName){
    return pokemonList.filter(pokemon => pokemon.name === pokemonName);
}

return{
  getAll,
  //add,
  findPokemon,
  addListItem,
  loadList,
  loadDetails
};

})();

pokemonRepository.loadList().then(function(){
  //for loop to call function for each pokemon to form a list of all pokemon
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

//

//let printPokemonDetails = pokemonRepository.findPokemon('Pikachu');
//console.log(printPokemonDetails[0]);
//console.log(pokemonRepository.getAll());

//script for sidebar
function openSlideMenu() {
  document.getElementById('menu').style.width = '250px';
  document.getElementById('content').style.marginLeft = '250px';
}

function closeSlideMenu() {
  document.getElementById('menu').style.width = '0';
  document.getElementById('content').style.marginLeft = '0';
}
