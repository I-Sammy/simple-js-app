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
    pokemonListItem.classList.add('group-list-item');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn','button-class');
    button.setAttribute('data-target', '#exampleModal');
		button.setAttribute('data-toggle', 'modal');
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
    item.weight = details.weight;
    //item.types = details.types;
    let pokemonType = details.types.map(types => {
      return types.type.name;
    })
    item.pokemonType = pokemonType;

  }).catch(function (e){
    console.error(e);
  });

}

//function to show details of the selected pokemon
function showDetails(pokemon){
  loadDetails(pokemon).then(function(){
    showModal('Pokemon Details',pokemon);
    console.log(pokemon);
  });
}
//function to add eventListener to button
function addEventToButton(button,pokemon){
  button.addEventListener('click',function(event){
    //showModal('Pokemon Details',pokemon);
    showDetails(pokemon);
  });
}

//function to look for a pokemon based on its name
function findPokemon(pokemonName){
    return pokemonList.filter(pokemon => pokemon.name === pokemonName);
}

function showModal(title,pokemon) {
  let modalBody = $('.modal-body');
	let modalTitle = $('.modal-title');
	//clear all existing modal content
	modalTitle.empty();
	modalBody.empty();
  //creating elements for modal to display
  let pokemonName = $('<h1>' + pokemon.name + '</h1>');
  let pokemonImage = $('<img class="modal-img" style="width:50%"">');
  pokemonImage.attr('src',pokemon.imageUrl);
  let pokemonHeight = $('<p>' + 'Height : ' + pokemon.height + 'm' + '</p>');
  let pokemonWeight = $('<p>' + 'Weight : ' + pokemon.weight + 'Kg' +'</p>');
  let pokemonType = $('<p>' + 'Type : ' + pokemon.pokemonType +'</p>');

  modalTitle.append(pokemonName);
  modalBody.append(pokemonImage);
  modalBody.append(pokemonHeight);
  modalBody.append(pokemonWeight);
  modalBody.append(pokemonType);
}

function hideModal(){
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
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

//search filter
$(document).ready(function(){
	$('#filter').on('keyup', function() {
		var value = $(this).val().toLowerCase();
		$('#pokemonListDiv *').filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	/* eslint-enable no-undef */
		});
	});
});

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
  document.getElementById('menu').style.marginTop = '80px';
  document.getElementById('content').style.marginLeft = '250px';
}

function closeSlideMenu() {
  document.getElementById('menu').style.width = '0';
  document.getElementById('menu').style.marginTop = '0';
  document.getElementById('content').style.marginLeft = '0';
}
