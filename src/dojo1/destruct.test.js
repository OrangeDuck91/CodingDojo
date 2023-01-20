describe("Exercice 4 : Destruct Tableaux", () => {
    test("Destructurer un tableau dans plusieurs variables", () => {

        let red, blue, green, pink;
        const colorArray = ['rouge', 'bleu', 'vert'];
        // Assigner les variables avec les valeurs du tableau 

        //#region Reponse ES5
        // red = colorArray[0];
        // blue = colorArray[1];
        // green = colorArray[2];
        // pink = colorArray[3];
        //#endregion

        //#region Reponse ES6
        // TODO
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
        // red = colorArray.shift();
        // blue = colorArray.shift();
        // resteDuTableau = colorArray;
        //#endregion

        //#region Reponse ES6
        // TODO;
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
        // red = colorArray[0];
        // pink = colorArray[3];
        //#endregion

        //#region Reponse ES6
        // TODO
        //#endregion

        expect(red).toBe('rouge');
        expect(pink).toBe('rose');
    });
});


describe("Exercice 5 : Destruct Objects", () => {
    test("Destructurer un Objet dans des variables", () => {

        const personne = { firstName: 'Michel', lastName: 'Chartrand', age: 93 };
        // Assigner les propriétés de l'objet à des variables

        //#region Reponse ES5
        // const firstName = personne.firstName;
        // const lastName = personne.lastName;
        // const age = personne.age;
        //#endregion

        //#region Reponse ES6
        // TODO
        //#endregion

        expect(firstName).toBe('Michel');
        expect(lastName).toBe('Chartrand');
        expect(age).toBe(93);
    });

    test("Destructurer un Objet dans des variables nommées différement", () => {

        const personne = { firstName: 'Michel', lastName: 'Chartrand', age: 93 };
        // Assigner les propriétés de l'objet à des variables de nom différent

        //#region Reponse ES5
        // const prenom = personne.firstName;
        // const nom = personne.lastName;
        // const experience = personne.age;
        //#endregion

        //#region Reponse ES6
        // TODO
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
        // TODO
        //#endregion

        expect(firstName).toBe('Michel');
        expect(lastName).toBe('Chartrand');
        expect(age).toBe(18);
    });
});


describe("Exercice 6 : Destruct dans fonctions", () => {
    test("Destructurer un Objet dans les parametres d'une fonction", () => {

        const personne = { firstName: 'Michel', lastName: 'Chartrand', age: 93 };
        // Ecrire un fonction qui affiche les infos d'une personne
        let afficherPersonne = () => { };

        //#region Reponse ES5
        // afficherPersonne = (p) => `${p.firstName} ${p.lastName}, ${p.age} ans`
        //#endregion

        //#region Reponse ES6
        // TODO
        //#endregion

        expect(afficherPersonne(personne)).toBe('Michel Chartrand, 93 ans');
    });

    test("Destructurer un Tableau dans les parametres d'une fonction", () => {

        const colorArray = ['rouge', 'bleu', 'vert', 'rose'];
        // Ecrire un fonction qui affiche le premier et le troisième elt d'un tableau
        let afficherPremierEtTroisieme = () => { };

        //#region Reponse ES5
        // afficherPremierEtTroisieme = (tab) => `${tab[0]} et ${tab[2]}`;
        //#endregion

        //#region Reponse ES6
        // TODO
        //#endregion

        expect(afficherPremierEtTroisieme(colorArray)).toBe('rouge et vert');
    });

    test("Combiner les destruct d'objets et de tableau dans des parametres de fonction.", () => {

        const personArray = [
            { firstName: 'Michel', lastName: 'Chartrand', age: 93 },
            { firstName: 'Robert', lastName: 'Burns', age: 77 }
        ];
        // Ecrire un fonction qui affiche le premier et le troisième elt d'un tableau
        let afficherLesNoms = () => { };

        //#region Reponse ES5
        // afficherLesNoms = (tab) => `${tab[0].lastName} et ${tab[1].lastName}`;
        //#endregion

        //#region Reponse ES6
        // TODO
        //#endregion

        expect(afficherLesNoms(personArray)).toBe('Chartrand et Burns');
    });
})