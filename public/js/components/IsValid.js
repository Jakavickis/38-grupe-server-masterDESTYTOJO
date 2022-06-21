//sutampa su Register.js const validationRule = inputDOM.dataset.validation;

// error-first approach

class IsValid {
    static fullname(str) {  //str stringas tiesiog name
        if (str === undefined) {
            return [true, 'Neduotas parametras']
        }
        if (typeof str !== 'string') {
            return [true, 'Netinkamas tipas, turi buti "string"']
        }
        return [false, 'OK']; // [true, 'fullname'];
    }
    //statiniai metodai nereikalauja const a = new fullname()   
    static email(str) {
        if (str.length < 2) {
            return [true, 'Per trumpas email tekstas.']
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