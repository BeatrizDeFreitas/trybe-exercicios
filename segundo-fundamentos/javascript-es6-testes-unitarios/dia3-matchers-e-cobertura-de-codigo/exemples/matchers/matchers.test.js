describe('explain overall', () => {
    test('toBe checks for strict equality (===) between value and expected.', () => {
        expect(2 + 2).toBe(4);
        expect ('hello').toBe('hello')
    })
    test('toEqual performs a deep equality check between value and expected', () => {
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect({ name: 'John', age: 30 }).toEqual({ name: 'John', age: 30 });

    })
    test('toBeTruthy checks if value is truthy (i.e., not false, 0, null, undefined, NaN, or an empty string', () => {
        expect(1).toBeTruthy();
        expect('hello').toBeTruthy();
    })
    test('toBeFalsy checks if value is falsy (i.e., false, 0, null, undefined, NaN, or an empty string).', () => {
        expect(0).toBeFalsy();
        expect(null).toBeFalsy();
    })
    test('toContain checks if value (an array or string) contains the expected element or substring.', () => {
        expect([1, 2, 3]).toContain(2);
        expect('hello world').toContain('world');
    })
    test('toHaveLength checks if value has a length property equal to expected.', () => {
        expect([1, 2, 3]).toHaveLength(3);
        expect('hello').toHaveLength(5);        
    })

    const skills = ['HTML', 'CSS', 'JavaScript'];

    const addNewSkill = (newSkill) => {
    skills.push(newSkill);
    }

    test('Adiciona Jest na lista de habilidades', () => {  
    const previousLength = skills.length;
    addNewSkill('Jest');
    expect(skills).toContain('Jest');
    expect(skills).toHaveLength(previousLength + 1);
    });

    const createUser = (firstName, lastName) => {
        const user = {
          email: (firstName + '_' + lastName + '@example.com').toLowerCase(),
          password: Math.floor(Math.random() * 100000000),
        };
        return user;
      }
      
      test('Cria email e senha', () => {
        const user = createUser('Mona', 'Lisa');
        expect(user).toHaveProperty('email', 'mona_lisa@example.com');
        expect(user).toHaveProperty('password');
      });

      const multiplyByTwo = (number) => {
        if (!number) {
          throw new Error('number é indefinido');
        }
        return number * 2;
      };
      multiplyByTwo(4);

      
      test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
        expect(multiplyByTwo(4)).toBe(8);
      });
      test('testa se é lançado um erro quando number é indefinido', () => {
        expect(() => { multiplyByTwo() }).toThrow();
      });
      test('testa se a mensagem de erro é "number é indefinido"', () => {
        expect(() => { multiplyByTwo() }).toThrow(new Error('number é indefinido'));
      });

      const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const weekendDays = ['Sunday', 'Saturday'];
        const weekDays = workDays.concat(weekendDays);

        test('Sunday is a week day', () => {
        expect(weekDays).toContain('Sunday');
        });

        test('Sunday is not a workday', () => {
        expect(workDays).not.toContain('Sunday');
        });
});