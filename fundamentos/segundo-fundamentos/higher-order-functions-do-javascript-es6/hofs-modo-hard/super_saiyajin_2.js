const data = require('../hofs-modo-hard/database');

const getReport = (speciesNames) => {
    const report = data.characters.reduce((acc, {name, powers, speciesId}) => {
        acc[name] = {
            species: data.species.find(({ id }) => id === speciesId).name,
            powers,
            speciesId,
        };
        return acc
    }, {})
};