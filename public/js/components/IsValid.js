//sutampa su Register.js const validationRule = inputDOM.dataset.validation;
class IsValid {
    static fullname(str) {
        if (str.length < 2) {
            return 'Per trumpas fullname tekstas.';
        }

        const parts = str.split(' ');
        if (parts.length < 2) {
            return 'Per mazai fullname zodziu';
        }
        return true; // [true, 'fullname'];
    }
    //statiniai metodai nereikalauja const a = new fullname()   
    static email(str) {
        if (str.length < 2) {
            return 'Per trumpas email tekstas.'
        }
        return true;
    }

    static password(str) {
        if (str.length < 2) {
            return 'Per trumpas password.'
        }
        return true;
    }
}

export { IsValid }