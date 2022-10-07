const dojo1 = require('./dojo1');
// const { exercie1, exercie2 } = require('./dojo1');

describe("Exercice 1 : Destruct Tableaux", () => {
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

    test("Destructurer un tableau dans 2 variables, et le reste dans un tableau", () => {

        let red, blue, resteDuTableau;
        const colorArray = ['rouge', 'bleu', 'vert', 'rose'];
        // Assigner les 2 variables et le reste du tableau avec les valeurs du tableau 

        //#region Reponse ES5
        red = colorArray.shift();
        blue = colorArray.shift();
        resteDuTableau = colorArray;
        //#endregion

        //#region Reponse ES6
        // [red, blue, ...resteDuTableau] = colorArray;
        //#endregion

        expect(red).toBe('rouge');
        expect(blue).toBe('bleu');
        expect(resteDuTableau).toEqual(['vert', 'rose']);
    });

    test("Destructurer le premier et le dernier élément d'un tableau dans 2 variables", () => {

        let red, pink;
        const colorArray = ['rouge', 'bleu', 'vert', 'rose'];
        // Assigner les 2 variables avec des éléments distincts du tableau ?

        //#region Reponse ES5
        red = colorArray[0];
        pink = colorArray[3];
        //#endregion

        //#region Reponse ES6
        // [red, , , pink] = colorArray;
        // Ou, pour une question de lisibilité
        // [red, _, _, pink] = colorArray;
        //#endregion

        expect(red).toBe('rouge');
        expect(pink).toBe('rose');
    })
});

describe("Exercice 2 : Destruct Objects", () => {
    test("Destructurer un Objet dans des variables", () => {

        const personne = { firstName: 'Michel', lastName: 'Chartrand', age: 93 };
        // Assigner les propriétés de l'objet à des variables

        //#region Reponse ES5
        const firstName = personne.firstName;
        const lastName = personne.lastName;
        const age = personne.age;
        //#endregion

        //#region Reponse ES6
        // const { firstName, lastName, age } = personne;
        //#endregion

        expect(firstName).toBe('Michel');
        expect(lastName).toBe('Chartrand');
        expect(age).toBe(93);
    });

    test("Destructurer un Objet dans des variables nommées différement", () => {

        const personne = { firstName: 'Michel', lastName: 'Chartrand', age: 93 };
        // Assigner les propriétés de l'objet à des variables de nom différent

        //#region Reponse ES5
        const prenom = personne.firstName;
        const nom = personne.lastName;
        const experience = personne.age;
        //#endregion

        //#region Reponse ES6
        // let { firstName: prenom, lastName: nom, age: experience } = personne;
        //#endregion

        expect(prenom).toBe('Michel');
        expect(nom).toBe('Chartrand');
        expect(experience).toBe(93);
    });

    test("Destructurer un Objet dans des variables avec des valeurs pr défaut", () => {

        const personne = { firstName: 'Michel', lastName: 'Chartrand' };
        // Assigner les propriétés de l'objet à des variables avec une valeur par défaut à 18 pour l'age

        //#region Reponse ES5
        // const firstName = personne.firstName;
        // const lastName = personne.lastName;
        // const age = personne.age || 18;
        //#endregion

        //#region Reponse ES6
        const { firstName, lastName, age = 18 } = personne;
        //#endregion

        expect(firstName).toBe('Michel');
        expect(lastName).toBe('Chartrand');
        expect(age).toBe(18);
    })
})