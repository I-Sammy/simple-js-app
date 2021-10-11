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

//forEach loop to print all the pokemon names inside the array
//print the names and heights of all pokemone inside the array
pokemonList.forEach(function(pokemon){
  //conditional loop to print pokemon details depending on their heights
  if(pokemon.height<= 0.3){
    document.write(pokemon.name + ' (height: ' + pokemon.height + ') - Hey, that\'s a tiny pokemon :). </br>');
  }
  else if(pokemon.height>1.0 && pokemon.height<2.0){
    document.write(pokemon.name + ' (height: ' + pokemon.height + ') - Wow! That\'s big!</br>');
  }
  else{
    document.write(pokemon.name + ' (height: ' + pokemon.height + ')</br>');
  }
});

//function to return all the info from pokemonList arary
function getAll(){
  return pokemonList;
}

//function to add pokemon objects into pokemonList array
function add(pokemon){
  if(typeof pokemon === 'object'){
    pokemonList.push(pokemon);
  }
  else{
    console.log('Only objects can be added!');
  }
}

//function to look for a pokemon based on its name
function find(pokemonName){
    let result = pokemonList.filter(pokemon => pokemon.name === pokemonName);
    console.log(result[0]);
}

return{
  getAll: getAll,
  add: add,
  find: find
};

})()

pokemonRepository.find('Pikachu');
