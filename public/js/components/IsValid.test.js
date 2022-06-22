import { IsValid } from "./IsValid";

describe('Gaudome netinkamus tipus', () => {
    test('no params', () => {
        const [err, msg] = IsValid.fullname();
        expect(err).toBe(true);
        expect(msg).toBe('Neduotas parametras');
    })

    test('number', () => {
        const [err, msg] = IsValid.fullname(1);
        expect(err).toBe(true);
        expect(msg).toBe('Netinkamas tipas, turi buti "string"');
    })

    test('boolean', () => {
        const [err, msg] = IsValid.fullname(true);
        expect(err).toBe(true);
        expect(msg).toBe('Netinkamas tipas, turi buti "string"');
    })

    test('array', () => {
        const [err, msg] = IsValid.fullname([]);
        expect(err).toBe(true);
        expect(msg).toBe('Netinkamas tipas, turi buti "string"');
    })

    test('null', () => {
        const [err, msg] = IsValid.fullname(null);
        expect(err).toBe(true);
        expect(msg).toBe('Netinkamas tipas, turi buti "string"');
    })

    test('object', () => {
        const [err, msg] = IsValid.fullname({});
        expect(err).toBe(true);
        expect(msg).toBe('Netinkamas tipas, turi buti "string"');
    })

    test('function', () => {
        const [err, msg] = IsValid.fullname(() => { });
        expect(err).toBe(true);
        expect(msg).toBe('Netinkamas tipas, turi buti "string"');
    })
})

describe('Gauname netinkamas reiksmes', () => {
    test('empty string', () => {
        const [err, msg] = IsValid.fullname('');
        expect(err).toBe(true);
        expect(msg).toBe('Per trumpas tekstas, turi buti minimum 5 simboliai');
    })

    test('single symbol too short', () => {
        const [err, msg] = IsValid.fullname('Petr');
        expect(err).toBe(true);
        expect(msg).toBe('Per trumpas tekstas, turi buti minimum 5 simboliai');
    })

    test('single word', () => {
        const [err, msg] = IsValid.fullname('Petra');
        expect(err).toBe(true);
        expect(msg).toBe('Tekstas turi tureti 2 arba daigiau zodziu');
    })

    test('long single word', () => {
        const [err, msg] = IsValid.fullname('PetrasPetraitis');
        expect(err).toBe(true);
        expect(msg).toBe('Tekstas turi tureti 2 arba daigiau zodziu');
    })

    test('one of words is too short', () => {
        const [err, msg] = IsValid.fullname('Petras P');
        expect(err).toBe(true);
        expect(msg).toBe('Visos vardo dalys turi buti minimum 2 simboliu');
    })

    test('few words is too short', () => {
        const [err, msg] = IsValid.fullname('Petras P A Petraitis');
        expect(err).toBe(true);
        expect(msg).toBe('Visos vardo dalys turi buti minimum 2 simboliu');
    })

    test('not allowed symbol: 🎅', () => {
        const [err, msg] = IsValid.fullname('Santa 🎅🎅🎅 Clause');
        expect(err).toBe(true);
        expect(msg).toBe('Neleistinas simbolis "🎅"');
    })

    test('not allowed symbol: 5', () => {
        const [err, msg] = IsValid.fullname('Santa Area5 Clause');
        expect(err).toBe(true);
        expect(msg).toBe('Neleistinas simbolis "5"');
    })

    test('not allowed symbol: .', () => {
        const [err, msg] = IsValid.fullname('Santa Area. Clause');
        expect(err).toBe(true);
        expect(msg).toBe('Neleistinas simbolis "."');
    })

    test('uppercase letter: end', () => {
        const [err, msg] = IsValid.fullname('Santa MariA');
        expect(err).toBe(true);
        expect(msg).toBe('Ne pirma zodzio raide turi buti mazoji');
    })

    test('uppercase letter: middle', () => {
        const [err, msg] = IsValid.fullname('SanTa Maria');
        expect(err).toBe(true);
        expect(msg).toBe('Ne pirma zodzio raide turi buti mazoji');
    })

    test('uppercase letter: all', () => {
        const [err, msg] = IsValid.fullname('SANTA MARIA');
        expect(err).toBe(true);
        expect(msg).toBe('Ne pirma zodzio raide turi buti mazoji');
    })

    test('lowercase letter: first (1)', () => {
        const [err, msg] = IsValid.fullname('santa Maria');
        expect(err).toBe(true);
        expect(msg).toBe('Pirma zodzio raide turi buti didzioji');
    })

    test('lowercase letter: first (2)', () => {
        const [err, msg] = IsValid.fullname('Santa maria');
        expect(err).toBe(true);
        expect(msg).toBe('Pirma zodzio raide turi buti didzioji');
    })

    test('mixed upper/lower letters (1)', () => {
        const [err, msg] = IsValid.fullname('SanTa marIa');
        expect(err).toBe(true);
        expect(msg).toBe('Ne pirma zodzio raide turi buti mazoji');
    })

    test('mixed upper/lower letters (2)', () => {
        const [err, msg] = IsValid.fullname('sANTA mARIA');
        expect(err).toBe(true);
        expect(msg).toBe('Pirma zodzio raide turi buti didzioji');
    })
})

describe('Gauname tinkamas reiksmes, bet su atleistinomis klaidomis', () => {
    test('many spaces in between', () => {
        const [err, msg] = IsValid.fullname('Jonas   Jonaitis');
        expect(err).toBe(false);
        expect(msg).toBe('OK');
    })

    test('many spaces in front', () => {
        const [err, msg] = IsValid.fullname('   Jonas Jonaitis');
        expect(err).toBe(false);
        expect(msg).toBe('OK');
    })

    test('many spaces at the end', () => {
        const [err, msg] = IsValid.fullname('Jonas Jonaitis   ');
        expect(err).toBe(false);
        expect(msg).toBe('OK');
    })
})

describe('Gauname tinkamas reiksmes', () => {
    test('two words', () => {
        const [err, msg] = IsValid.fullname('Petras Petraitis');
        expect(err).toBe(false);
        expect(msg).toBe('OK');
    })

    test('three words', () => {
        const [err, msg] = IsValid.fullname('Jon Bon Jovi');
        expect(err).toBe(false);
        expect(msg).toBe('OK');
    })

    test('four words', () => {
        const [err, msg] = IsValid.fullname('Jean Clode Van Damme');
        expect(err).toBe(false);
        expect(msg).toBe('OK');
    })
})

///////// email testai \\\\\\\\\\\

describe('Gaudome email netinkamus tipus', () => {
    test('no params', () => {
        const [err, msg] = IsValid.email();
        expect(err).toBe(true);
        expect(msg).toBe('Neduotas parametras');
    })

    test('number', () => {
        const [err, msg] = IsValid.email(1);
        expect(err).toBe(true);
        expect(msg).toBe('Netinkamas tipas, turi buti "string"');
    })

    test('boolean', () => {
        const [err, msg] = IsValid.email(true);
        expect(err).toBe(true);
        expect(msg).toBe('Netinkamas tipas, turi buti "string"');
    })

    test('array', () => {
        const [err, msg] = IsValid.email([]);
        expect(err).toBe(true);
        expect(msg).toBe('Netinkamas tipas, turi buti "string"');
    })

    test('null', () => {
        const [err, msg] = IsValid.email(null);
        expect(err).toBe(true);
        expect(msg).toBe('Netinkamas tipas, turi buti "string"');
    })

    test('object', () => {
        const [err, msg] = IsValid.email({});
        expect(err).toBe(true);
        expect(msg).toBe('Netinkamas tipas, turi buti "string"');
    })

    test('function', () => {
        const [err, msg] = IsValid.email(() => { });
        expect(err).toBe(true);
        expect(msg).toBe('Netinkamas tipas, turi buti "string"');
    })


})

describe('Gauname netinkamas email reiksmes', () => {
    test('empty string', () => {
        const [err, msg] = IsValid.email('');
        expect(err).toBe(true);
        expect(msg).toBe('Per trumpas , turi buti minimum 6 simboliai');
    })

    test('one simbol to short', () => {
        const [err, msg] = IsValid.email('a@a.a');
        expect(err).toBe(true);
        expect(msg).toBe('Per trumpas , turi buti minimum 6 simboliai');
    })

    test('not enought @ simbol', () => {
        const [err, msg] = IsValid.email('aaaaaa.lt');
        expect(err).toBe(true);
        expect(msg).toBe('email turi tureti tik viena @ simboli');
    })

    test('too much @ simbol', () => {
        const [err, msg] = IsValid.email('aaaa@@aa.lt');
        expect(err).toBe(true);
        expect(msg).toBe('email turi tureti tik viena @ simboli');
    })

    test('@ infront', () => {
        const [err, msg] = IsValid.email('@aaaaaaa.lt');
        expect(err).toBe(true);
        expect(msg).toBe('truksta teksto pries @ simbolio');
    })

    test('@ in the back', () => {
        const [err, msg] = IsValid.email('aaaaaaa.lt@');
        expect(err).toBe(true);
        expect(msg).toBe('truksta teksto po @ simbolio');
    })

    test('@ in the back', () => {
        const [err, msg] = IsValid.email('aaaaaaa@');
        expect(err).toBe(true);
        expect(msg).toBe('truksta teksto po @ simbolio');
    })

    test('invalid simbols', () => {
        const [err, msg] = IsValid.email('aaa#a<a@aa.lt');
        expect(err).toBe(true);
        expect(msg).toBe('neleistinas simbolis - #');
    })

    test('invalid simbols', () => {
        const [err, msg] = IsValid.email('aaaaaa@a>.lt');
        expect(err).toBe(true);
        expect(msg).toBe('neleistinas simbolis - >');
    })

    test('forgot .', () => {
        const [err, msg] = IsValid.email('aaaa@aaa');
        expect(err).toBe(true);
        expect(msg).toBe('netinkamas domenas');
    })

    test('forgot . after @ simbol', () => {
        const [err, msg] = IsValid.email('aa.aa@aaaaaaaa');
        expect(err).toBe(true);
        expect(msg).toBe('netinkamas domenas');
    })

    test('last simbol cannot be .', () => {
        const [err, msg] = IsValid.email('aaaa@aaaaaaaa.');
        expect(err).toBe(true);
        expect(msg).toBe('el. pastas turi baigtis bent dvejomis raidemis');
    })

    test('second from end simbol cannot be .', () => {
        const [err, msg] = IsValid.email('aaaa@aaaaaaa.a');
        expect(err).toBe(true);
        expect(msg).toBe('el. pastas turi baigtis bent dvejomis raidemis');
    })

    test('cannot be two dots inline', () => {
        const [err, msg] = IsValid.email('aaaa@aaaaaaa..aa');
        expect(err).toBe(true);
        expect(msg).toBe('du taskai is eiles');
    })

    test('cannot be two dots inline', () => {
        const [err, msg] = IsValid.email('aa..aa@aaaaaaaa.lt');
        expect(err).toBe(true);
        expect(msg).toBe('du taskai is eiles');
    })
})

describe('Gauname tinkamas reiksmes', () => {
    test('email', () => {
        const [err, msg] = IsValid.email('petras@petras.lt');
        expect(err).toBe(false);
        expect(msg).toBe('OK');
    })

    test('email length', () => {
        const [err, msg] = IsValid.email('a@a.lt');
        expect(err).toBe(false);
        expect(msg).toBe('OK');
    })

})