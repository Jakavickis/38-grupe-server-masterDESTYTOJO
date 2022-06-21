//sutampa su Register.js const validationRule = inputDOM.dataset.validation;

// error-first approach

class IsValid {
    static fullname(str) {  //str stringas tiesiog name
        if (str === undefined) {
            return [true, 'Neduotas parametras']
        }
        // ar buvo gauta klaida 
        if (typeof str !== 'string') {
            // true taip buvo klaida ir kokia klaida parasoma 
            return [true, 'Netinkamas tipas, turi buti "string"']
        }
        str = str.trim().replace(/\s+/g, ' ');
        // str = str.trim().replaceAll('  ', ' '); // nes pas mane sitas neveikia :(

        const minWordsCount = 2;
        const minWordLength = 2;
        const minTextLength = minWordsCount * minWordLength + (minWordsCount - 1);
        if (str.length < minTextLength) {
            return [true, `Per trumpas tekstas, turi buti minimum ${minTextLength} simboliai`];
        }

        const allowedSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const words = str.split(' ');
        if (words.length < minWordsCount) {
            return [true, `Tekstas turi tureti ${minWordsCount} arba daigiau zodziu`];
        }
        for (const word of words) {
            if (word.length < minWordLength) {
                return [true, `Visos vardo dalys turi buti minimum ${minWordLength} simboliu`];
            }

            // pirma raide
            if (word[0].toUpperCase() !== word[0]) {
                return [true, `Pirma zodzio raide turi buti didzioji`];
            }

            // kitos raides
            const otherLetters = word.slice(1);
            if (otherLetters.toLowerCase() !== otherLetters) {
                return [true, `Ne pirma zodzio raide turi buti mazoji`];
            }

            // ar tik leistinos raides
            for (const s of word) {
                if (!allowedSymbols.includes(s)) {
                    return [true, `Neleistinas simbolis "${s}"`];
                }
            }
        }

        return [false, 'OK'];
    }

    static password(str) {
        if (str.length < 2) {
            return [true, 'Per trumpas password.']
        }
        return [false, 'OK'];
    }
}

export { IsValid }