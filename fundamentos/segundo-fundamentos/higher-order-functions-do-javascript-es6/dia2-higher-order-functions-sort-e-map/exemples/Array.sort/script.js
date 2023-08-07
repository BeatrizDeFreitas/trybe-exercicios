const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort();
console.log(inventory); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

const inventory2 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory2.sort((a, b) => a - b);
console.log(inventory2); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const inventory3 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
// troca a operação para b - a
inventory3.sort((a, b) => b - a);
console.log(inventory3); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const gamers = [
    {
        name: 'Eduardo',
        points: [20, 22, 100, 10, 0]
    },
    {
        name: 'Ana',
        points: [0, 20, 10, 100, 100]
    },
    {
        name: 'Bob',
        points: [0, 100, 10, 10, 5, 20]
    },
    {
        name: 'Carlo',
        points: [3, 20, 10, 10, 10]
    }
];

gamers.sort((a, b) => a.name > b.name ? 1 : -1);
gamers.sort((a, b) => {
    let pointsA = 0;
    let pointsB = 0;
    a.points.forEach((element) => pointsA += element);
    b.points.forEach((element) => pointsB += element);
    return pointsA = pointsB;
})
console.log(gamers);