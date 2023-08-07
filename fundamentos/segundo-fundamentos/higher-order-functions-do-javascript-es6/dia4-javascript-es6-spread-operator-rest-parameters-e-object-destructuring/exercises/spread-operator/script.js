// Faça uma lista com as suas frutas favoritas
const specialFruit = ['grapefruit', 'passionfruit', 'cramberry'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['milk', 'honey', 'chocolate'];

const fruitSalad = (fruit, additional) => {
    const fruitSaladaWithAdditional = [...fruit, ...additional];
    return fruitSaladaWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));