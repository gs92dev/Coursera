const addFive = require(`./index`);

test('Add 5',()=>{
    expect(addFive(2)).toBe(7)
})