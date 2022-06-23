import { IsValid } from "../components/IsValid.js";

const formDOM = document.querySelector('.form');
const inputsDOM = formDOM.querySelectorAll('input');
const submitDOM = formDOM.querySelector('button');
const notificationsDOM = formDOM.querySelector('.notifications');

if (submitDOM) {
    submitDOM.addEventListener('click', async (e) => {
        e.preventDefault();

        notificationsDOM.classList.remove('show');

        const data = {};
        const errors = [];

        for (const inputDOM of inputsDOM) {
            if (inputDOM.type !== 'checkbox') {
                //prie name priskiriame inputo value ka irasome
                data[inputDOM.name] = inputDOM.value;
                const rule = inputDOM.dataset.validation;
                // destrukturizavimas [err,msg] = [true, 'Per trumpas email tekstas.']
                const [err, msg] = IsValid[rule](inputDOM.value);
                if (err) {
                    errors.push(msg)
                } else {
                    data[inputDOM.name] = inputDOM.value;
                }
            } else {
                data[inputDOM.name] = inputDOM.checked;
                if (!inputDOM.checked) {
                    errors.push('Privaloma sutikti su TOS')
                }
            }
        }

        if (inputsDOM[2].value !== inputsDOM[3].value) {
            errors.push('Slaptazodziai nesutampa')
        }



        if (errors.length) {
            notificationsDOM.classList.add('show');
            // .\n nauja eilute(enter) reiskia simbolis ir join newline
            notificationsDOM.innerText = errors.join('.\n') + '.';
            // arba notificationsDOM.innerHTML = errors.map(e => `<p>${e}.</p>`).join('');
        } else {
            delete data.repass;
            delete data.tos;

            const response = await fetch(formDOM.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        }

        // tikriname ar laukai ne tusti
        // ar vardas "tikras"
        // ar email "tikras"
        // ar password "tikras"
        // ar password === re-pass
        // ar checkbox "tikras"
        // jei yra KLAIDU:
        //  atvaizduojame pranesimus klaidu bloke
        // jei KLAIDU nera:
        // sekmes pranesimas bloke
        //\\ siunciam i backenda (API)
        // jei grazino klaida
        //  atvaizduojame pranesimus klaidu bloke
        // jei ne parasom all good bloke
    })
}

//## varijantas ##//
// notificationsDOM.classList.remove('show');
// notificationsDOM.innerText = '';

// for (const inputDOM of inputsDOM) {
//     if (inputDOM.type !== 'checkbox') {
//         //prie name priskiriame inputo value ka irasome
//         data[inputDOM.name] = inputDOM.value;
//         const rule = inputDOM.dataset.validation;
//         const result = IsValid[rule](inputDOM.value);
//         if (result === true) {
//             data[inputDOM.name] = inputDOM.value;
//         } else {
//             console.log('klaida')
//             notificationsDOM.classList.add('show');
//             notificationsDOM.innerHTML += `<p>${result}</p>`;
//         }
//     } else {
//         data[inputDOM.name] = inputDOM.checked;
//     }
// }