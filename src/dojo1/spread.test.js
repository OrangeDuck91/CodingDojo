describe("Exercice 4 : Spread Tableaux", () => {
    test("Combiner 2 tableaux", () => {

        const numbersOne = [1, 2, 3];
        const numbersTwo = [4, 5, 6];
        let numbersCombined = [];
        // Combiner les 2 tableaux dans un nouveau tableau

        //#region Reponse ES5
        numbersCombined = numbersOne.concat(numbersTwo);
        //#endregion

        //#region Reponse ES6
        // numbersCombined = [...numbersOne, ...numbersTwo]
        //#endregion

        expect(numbersCombined).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("Ajouter des éléments à un tableau", () => {

        let numbersTwo = [4, 5, 6];
        // Construire un tableau contenant 1,2,3 et les elements de numbersTwo

        //#region Reponse ES5
        let numbersOne = [1, 2, 3].concat(numbersTwo);
        //#endregion

        //#region Reponse ES6
        // let numbersOne = [1, 2, 3, ...numbersTwo];
        //#endregion

        expect(numbersOne).toEqual([1, 2, 3, 4, 5, 6]);
    });
});

describe("Exercice 5 : Spread Objects", () => {
    test("Combiner 2 objets", () => {

        const personne = { firstName: 'Michel', lastName: 'Chartrand', age: 93 };
        const voiture = { marque: 'Toyota', modele: 'Echo', annee: 2007 }
        let personneVoiture;
        // Combiner les propriétés de 2 objets en un seul

        //#region Reponse ES5
        personneVoiture = Object.assign({}, personne, voiture);
        //#endregion

        //#region Reponse ES6
        // personneVoiture = { ...personne, ...voiture }
        //#endregion

        expect(personneVoiture).toEqual({
            firstName: 'Michel',
            lastName: 'Chartrand',
            age: 93,
            marque: 'Toyota',
            modele: 'Echo',
            annee: 2007
        });
    });

    test("Copier un objet en modifiant une propriété", () => {

        const personne = { firstName: 'Michel', lastName: 'Chartrand', age: 93 };
        let personneCopy;
        // Copier un objet en modifiant une propriété (Très utile avec React/Redux et les immutable objects)

        //#region Reponse ES5
        personneCopy = Object.assign({}, personne, { age: 18 });
        //#endregion

        //#region Reponse ES6
        // personneCopy = { ...personne, age: 18 };
        //#endregion

        expect(personneCopy).toEqual({
            firstName: 'Michel',
            lastName: 'Chartrand',
            age: 18,
        });
    });

})

describe("Exercice 6 : Spread Strings et parametres de Fonction ", () => {
    test("Éclater une string en un tableau caractères", () => {

        const pouet = "Pouet";
        let spreadedString;
        // Éclater une string en un tableau de caractères

        //#region Reponse ES5
        spreadedString = pouet.split('');
        //#endregion

        //#region Reponse ES6
        // spreadedString = [...pouet]
        //#endregion

        expect(spreadedString).toEqual(['P', 'o', 'u', 'e', 't']);
    });

    test("Passer des parametres à une fonction", () => {

        const parametres = ['a', 'b', 'c'];
        const superFonction = (param1, param2, param3) => {
            return `param1=${param1}; param2=${param2}; param3=${param3};`
        }
        let resultat;
        // Éclater une string en plusieurs caractères

        //#region Reponse ES5
        resultat = superFonction(parametres[0], parametres[1], parametres[2]);
        //#endregion

        //#region Reponse ES6
        // resultat = superFonction(...parametres);
        //#endregion

        expect(resultat).toEqual('param1=a; param2=b; param3=c;');
    });

})