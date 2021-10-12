//Declare and assign objects to an array with some pokemone details
let pokemonRepository = (function(){
let pokemonList = [
  {
    name: 'Pikachu',
    height: 0.4,
    weight: 6.0,
    types: ['electric']
  },
  {
     name: 'Charmander',
     height: 0.6,
     weight: 8.5,
     types: ['fire']
 },
 {
    name: 'Bulbasaur',
    height: 0.7,
    weight: 6.9,
    types: ['grass','poison']
},
{
   name: 'Butterfree',
   height: 1.1,
   weight: 32.0,
   types: ['bug','flying']
},
{
   name: 'Igglybuff',
   height: 0.3,
   weight: 1.0,
   types: ['fairy','normal']
},
{
  name: 'Charizard',
  height: 1.7,
  weight: 90.5,
  types: ['fire','flying']
},
{
  name: 'Machamp',
  height: 1.6,
  weight: 130,
  types: ['fighting']
}
];

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

//function to show details of the selected pokemon
function showDetails(pokemon){
  console.log(pokemon);
}
//function to add eventListener to button
function addEventToButton(button,pokemon){
  button.addEventListener('click',function(){
    showDetails(pokemon);
  });
}
//function to return all the info from pokemonList arary
function getAll(){
  return pokemonList;
}

//function to add pokemon objects into pokemonList array
function add(pokemon){
  if(typeof pokemon === 'object' && 'name' in pokemon && 'height' in pokemon && 'weight' in pokemon && 'types' in pokemon){
    pokemonList.push(pokemon);
  }
  else{
    console.log('Given information is incorrect!');
  }
}

//function to look for a pokemon based on its name
function findPokemon(pokemonName){
    return pokemonList.filter(pokemon => pokemon.name === pokemonName);
}

return{
  getAll: getAll,
  add: add,
  findPokemon,
  addListItem
};

})()

//for loop to call function for each pokemon to form a list of all pokemon
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});


let printPokemonDetails = pokemonRepository.findPokemon('Pikachu');
console.log(printPokemonDetails[0]);
console.log(pokemonRepository.getAll());
