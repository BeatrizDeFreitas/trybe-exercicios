const employees = [
    { id: 1, nome: 'Douglas Adams', idade: 20},
    { id: 2, nome: 'H. G. Wells', idade: 18},
    { id: 3, nome: 'Júlio Verne', idade: 57},
    { id: 4, nome: 'Margaret Atwood', idade: 83},
    { id: 5, nome: 'Edgar Allan Poe', idade: 19},
  ];
  
  employees.find((employee) => employee.id === 2).nome; // H. G. Wells

  employees.find((employee) => employee.nome === 'Margaret Atwood').id; // 4


  const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

  idades.find((idade) => idade === 33); // undefined