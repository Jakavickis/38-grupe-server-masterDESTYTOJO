import { IsValid } from "../components/IsValid.js";

const formDOM = document.querySelector('.form');
const inputsDOM = formDOM.querySelectorAll('input');
const submitDOM = formDOM.querySelector('button');

if (submitDOM) {
    submitDOM.addEventListener('click', (e) => {
        e.preventDefault();

        const data = {};

        for (const inputDOM of inputsDOM) {
            if (inputDOM.type !== 'checkbox') {
                //prie name priskiriame inputo value ka irasome
                data[inputDOM.name] = inputDOM.value;
                const rule = inputDOM.dataset.validation;
                const result = IsValid[rule](inputDOM.value);
                if (result) {
                    data[inputDOM.name] = inputDOM.value;
                } else {
                    console.log('klaida')
                }
            } else {
                data[inputDOM.name] = inputDOM.checked;
            }
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