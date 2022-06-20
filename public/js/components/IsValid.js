//sutampa su Register.js const validationRule = inputDOM.dataset.validation;
class IsValid {
    static fullname(str) {
        if (str.length < 2) {
            return false
        }
        return true; // [true, 'fullname'];
    }
    //statiniai metodai nereikalauja const a = new fullname()   
    static email(str) {
        if (str.length < 2) {
            return false
        }
        return true;
    }

    static password(str) {
        if (str.length < 2) {
            return false
        }
        return true;
    }
}

export { IsValid }