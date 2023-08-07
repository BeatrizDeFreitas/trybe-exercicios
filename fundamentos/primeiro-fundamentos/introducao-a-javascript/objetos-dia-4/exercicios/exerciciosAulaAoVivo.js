const menu = {
    sandwiches: [
        {
          name: 'Big Mac',
          price: 26.90,
          ingredients: ['2 hambúrgueres', 'alface americana', 'queijo cheddar', 'molho especial', 'cebola', 'picles', 'pão com gergelim'],
          calories: 503,
        },
        {
          name: 'Duplo Quarterão',
          price: 39.90,
          ingredients: ['2 hambúrgueres', 'mostarda', 'ketchup', 'cebola', 'queijo cheddar', 'pão com gergelim'],
          calories: 762,
        },
        {
          name: 'Big Tasty',
          price: 39.90,
          ingredients: ['1 hambúrguer', 'queijo emental', 'tomate', 'alface americana', 'cebola', 'molho tasty', 'pão com gergelim'],
          calories: 944,
        },
      ],
      sideDishes: [
        {
          name: 'Chicken McNuggets - 10 unidades',
          price: 16.90,
          ingredients: ['frango empanado'],
          calories: 414,
        },
        {
          name: 'McFritas Kids',
          price: 8.90,
          ingredients: ['batata', 'sal'],
          calories: 90,
        },
        {
          name: 'McFritas Pequena',
          price: 11.90,
          ingredients: ['batata', 'sal'],
          calories: 211,
        },
        {
          name: 'McFritas Média',
          price: 13.90,
          ingredients: ['batata', 'sal'],
          calories: 295,
        },
        {
          name: 'McFritas Grande',
          price: 15.90,
          ingredients: ['batata', 'sal'],
          calories: 422,
        },
      ],
      desserts: [
        {
          name: 'McFlurry Ovomaltine Caramelo',
          price: 13.90,
          ingredients: ['bebida láctea sabor baunilha', 'flocos de ovomaltine', 'cobertura de caramelo'],
          calories: 462,
        },
        {
          name: 'Top Sundae Chocolate',
          price: 11.90,
          ingredients: ['bebida láctea sabor baunilha', 'cobertura de chocolate', 'farofa de paçoca', 'canudo'],
          calories: 377,
        },
        {
          name: 'Torta de Banana',
          price: 6.90,
          ingredients: ['banana', 'massa crocante'],
          calories: 222,
        },
      ],
      drinks: [
        {
          name: 'Coca-Cola 300ml',
          price: 13.90,
          calories: 129,
        },
        {
          name: 'Del Valle Uva 500ml',
          price: 11.90,
          calories: 200,
        }
      ],
};

console.log("----------------------------------------------------------------------");


// 1 - Função que imprima nome e valor dos lanches


function readSandwichs(sandwichs) {
    for (let index = 0; index < sandwichs.length; index += 1) {
        console.log(`${sandwichs[index].name} - R$ ${sandwichs[index].price}`);
    }
}
    readSandwichs(menu.sandwiches);


    console.log("----------------------------------------------------------------------");


// 2 - Pesquisa por nome do lanche


const pesquisaPorNome = (nomeLanche) => {
    for( let index = 0; index < menu.sandwiches.length; index += 1) {
        const elemento = menu.sandwiches[index];
        if (nomeLanche === elemento.name) {
            return elemento;
        }
    }
};

    console.log(pesquisaPorNome('Duplo Quarterão'));


    console.log("----------------------------------------------------------------------");


// 3 - Pesquisa por valor


    const carteira = (valor) => {
        const arrayRetorno = [];

        for (let index = 0; index < menu.sandwiches.length; index += 1) {
            const elemento = menu.sandwiches[index];
            if (elemento.price <= valor) {
                arrayRetorno.push(elemento.name);
            }
        }

        return arrayRetorno;
    };

        console.log(carteira(50));


    console.log("----------------------------------------------------------------------");


// 4- Busca lanches por ingredientes


function pesquisaPorIngrediente(nomeIngrediente) {
  const arrayLanches = [];
  for (let index = 0; index < menu.sandwiches.length; index += 1) {

    const ingredientes = menu.sandwiches[index].ingredients;
    
    const elemento = menu.sandwiches[index];
    if (ingredientes.includes(nomeIngrediente)) {
      arrayLanches.push(elemento);
    }
  }

  return arrayLanches;
}

     console.log(pesquisaPorIngrediente('queijo cheddar'));


    console.log("----------------------------------------------------------------------");