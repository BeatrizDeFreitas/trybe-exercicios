const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15


console.log('==========================================================================');


const numbers2 = [8, 3, 12, 4, 6];

const max = numbers2.reduce((maxValue, currentValue) => Math.max(maxValue, currentValue), numbers2[0]);
console.log(max); // Output: 12


console.log('==========================================================================');


const items = [
    { category: 'Electronics', name: 'Laptop' },
    { category: 'Clothing', name: 'Shirt' },
    { category: 'Electronics', name: 'Headphones' },
    { category: 'Clothing', name: 'Jeans' },
    { category: 'Electronics', name: 'Smartphone' },
  ];
  
  const groupedItems = items.reduce((grouped, item) => {
    (grouped[item.category] = grouped[item.category] || []).push(item.name);
    return grouped;
  }, {});
  
  console.log(groupedItems);
  /* Output:
  {
    Electronics: ['Laptop', 'Headphones', 'Smartphone'],
    Clothing: ['Shirt', 'Jeans']
  }
  */

  
  console.log('==========================================================================');


  