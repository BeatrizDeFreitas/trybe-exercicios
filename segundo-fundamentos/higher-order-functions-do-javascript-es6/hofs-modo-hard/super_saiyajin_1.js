const data = require('../hofs-modo-hard/database');

const getCharactersBySpeciesIds = (speciesNames) => {
    const targetSpecies = data.species.find((species) => species.name === speciesNames)
    if (!targetSpecies) {
      throw new Error('Species not found')
    }
    
    const ids = targetSpecies.id;
    return data.characters.filter((character) => character.speciesId === ids);
  
  };
  
  console.log(getCharactersBySpeciesIds('Androide'));