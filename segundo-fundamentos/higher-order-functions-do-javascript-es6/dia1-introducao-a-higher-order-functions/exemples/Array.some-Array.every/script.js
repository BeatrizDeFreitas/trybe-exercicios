    const pessoas = [
        { nome: 'Ana', cargo: 'Analista' },
        { nome: 'João', cargo: 'Gerência' },
        { nome: 'Aline', cargo: 'Analista' },
        { nome: 'Joana', cargo: 'Gerência' },
    ];
    
    const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');

    const verificaCargo2 = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');
    
    console.log(verificaCargo); // true

    console.log(verificaCargo2); // false
  


    const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

    const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

    console.log(verifyFirstLetter('J', listNames)); // true
    console.log(verifyFirstLetter('X', listNames)); // false



    const grades = {
        portugues: 'Aprovado',
        matematica: 'Reprovado',
        ingles: 'Aprovado',
      };
      
      const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false
      
      console.log(verifyGrades);