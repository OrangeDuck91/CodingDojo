describe("Exercice 4 : Destruct Tableaux", () => {
    test("Destructurer un tableau dans plusieurs variables", () => {

        let red, blue, green, pink;
        const colorArray = ['rouge', 'bleu', 'vert'];
        // Assigner les variables avec les valeurs du tableau 

        //#region Reponse ES5
        red = colorArray[0];
        blue = colorArray[1];
        green = colorArray[2];
        pink = colorArray[3];
        //#endregion

        //#region Reponse ES6
        // [red, blue, green, pink] = colorArray;
        //#endregion

        expect(red).toBe('rouge');
        expect(blue).toBe('bleu');
        expect(green).toBe('vert');
        expect(pink).toBe(undefined);
    });
});