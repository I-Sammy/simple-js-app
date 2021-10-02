//Declare and assign objects to an array with some pokemone details
let pokemonList = [{
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
}];

//for loop to print all the pokemon names inside the array

let pokemonName = '';
let pokemonHeight = 0;
let i = 0;
//print the names and heights of all pokemone inside the array
for(i=0; i<pokemonList.length; i++){
  pokemonName = pokemonList[i].name;
  pokemonHeight = pokemonList[i].height;
  //document.write(pokemonName + ' (height: ' + pokemonHeight + ') </br>');
  //conditional loop to print pokemon details depending on their heights
    if(pokemonHeight<= 0.3){
      document.write(pokemonName + ' (height: ' + pokemonHeight + ') - Hey, that\'s a tiny pokemon :). </br>');
    }
    else if (pokemonHeight> 1.0 && pokemonHeight<2.0) {
      document.write(pokemonName + ' (height: ' + pokemonHeight + ') - Wow! That\'s big!</br>');
    }
    else{
      document.write(pokemonName + ' (height: ' + pokemonHeight + ')</br>');
    }
}
