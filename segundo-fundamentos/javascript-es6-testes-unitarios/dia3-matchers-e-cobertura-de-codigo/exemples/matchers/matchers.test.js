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
});