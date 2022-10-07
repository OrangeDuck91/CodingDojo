const dojo1 = require('./dojo1');
// const { exercie1, exercie2 } = require('./dojo1');

describe("Exercice 1 ", () => {
    test("Should return exercice1", () => {
        expect(dojo1.exercice1()).toBe('exercice1');
    })
})