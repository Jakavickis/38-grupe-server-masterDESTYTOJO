import crypto from 'crypto';
import config from '../config.js';

const utils = {};

utils.hash = (str) => {
    if (typeof str === 'string' && str !== '') {
        const hashedStr = crypto
            .createHmac('sha512', config.hashingSecret)
            .update(str)
            .digest('hex');
        return [false, hashedStr];
    }
    return [true, 'Uzsifruoti galima tik ne tuscia teksta'];
}

utils.fileExtension = (URL) => {
    // services -> undefined
    // services/design -> undefined
    // css/main.css -> css
    return URL.split('.')[1];
}

utils.parseJSONtoObject = (str) => {
    try {
        return [false, JSON.parse(str)];
    } catch (error) {
        return [true, 'ERROR'];
    }
}

/**
 * Duomenu objekto validatorius, kuris tikrina, ar duomenu objekte yra tik leistini raktazodziai.
 * 
 * Objekte gali buti ir papildomu neprivalomu, bet vis vien leistinu raktazodziu (optional keys)
 * @param {Object} obj Duomenu objektas
 * @param {Object} rules Nustatymu objektas
 * @param {[]?} rules.required Privalomu raktazodziu sarasas
 * @param {[]?} rules.optional Neprivalomu raktazodziu sarasas
 * @returns {[boolean, string]} Rezultatas, kur pirmasis parametras reiskia ar buvo rasta klaida, o antrasis - zinute (aprasanti klaida)
 */
utils.objectValidator = (obj, rules) => {
    if (typeof obj !== 'object'
        || obj === null
        || Array.isArray(obj)) {
        return [true, 'Neduotas objektas'];
    }

    if (typeof rules !== 'object'
        || rules === null
        || Array.isArray(rules)) {
        return [true, 'Neduotas strukturos objektas'];
    }

    if (!('required' in rules)) {
        rules.required = [];
    }
    if (!('optional' in rules)) {
        rules.optional = [];
    }

    const objKeys = Object.keys(obj);
    const { required, optional } = rules;
    const totalRulesKeys = [...required, ...optional];

    for (const reqKey of required) {
        if (!objKeys.includes(reqKey)) {
            return [true, `Truksta privalomo key "${reqKey}"`];
        }
    }

    for (const objKey of objKeys) {
        if (!totalRulesKeys.includes(objKey)) {
            return [true, `Pateiktas netinkamas/perteklinis key "${objKey}"`];
        }
    }

    return [false, 'OK'];
}

utils.browserDetection = (str) => {
    if (str.includes('Trident/')) {
        return 'IE'
    }

    if (str.includes('Firefox/')) {
        return 'Firefox'
    }

    if (str.includes('Edg/')) {
        return 'Edge'
    }

    if (str.includes('Chrome/')) {
        return 'Chrome'
    }

    if (str.includes('Safari/')) {
        return 'Safari'
    }

    if (str.includes('OPR')) {
        return 'Opera'
    }

    return 'Serveriui nezinoma narsykle';
}

utils.randomString = (size = 20) => {
    const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const inter = abc.length;
    let text = '';

    for (let i = 0; i < size; i++) {
        const index = Math.floor(Math.random() * inter);
        text += abc[index];
    }

    return text;
}

utils.parseCookiesFancy = (str) => {
    if (typeof str !== 'string' || str === '') {
        return '';
    }
    return str
        .split(';')
        .map(s => s.trim().split('='))
        .reduce((obj, item) => {
            obj[item[0]] = item[1];
            return obj;
        }, {});
}

utils.parseCookies = (str) => {
    const obj = {};

    if (typeof str === 'string' && str !== '') {
        const cookieParts = str.split(';').map(s => s.trim());
        for (const cookie of cookieParts) {
            const [key, value] = cookie.split('=');
            obj[key] = value;
        }
    }

    return obj;
}


export { utils };


// // Explorer
// // 1) Trident/
// Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko

// // Firefox
// // 2) Firefox
// Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0

// // Edge
// // 3) Edg
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36 Edg/103.0.1264.37

// // Chromas
// // 4) Chrome
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36

// // Safari
// // 5) Safari
// Mozilla/5.0 (Macintosh; Intel Mac OS X 12_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15

// // Insomnia
// // 6) insomnia tiesiog
// insomnia/2022.4.2

// // Opera
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 OPR/82.0.4227.50
