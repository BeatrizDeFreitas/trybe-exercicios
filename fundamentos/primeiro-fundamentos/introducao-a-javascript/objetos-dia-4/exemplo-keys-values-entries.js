const product = {
    name: 'Ruffles Original - 76g',
    price: 8.59,
    company: 'Elma Chips',
    nutritionInfo: {
      carbohydrates: 12,
      sugar: 0,
      sodium: 129,
    }
  };



  ////////////////////// Array com as chaves /////////////////////////////////////


  let keys = Object.keys(product);

  console.log(keys); 


  /////////////////////// Array com os valores ////////////////////////////////////

  let values = Object.values(product);

  console.log(values);


  //////////////////////// Arrays com as entradas ///////////////////////////////////


  let entries = Object.entries(product);
  
  console.log(entries);


  ///////////////////////////////////////////////////////////


