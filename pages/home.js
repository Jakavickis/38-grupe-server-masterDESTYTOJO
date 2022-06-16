import { PageTemplate } from '../lib/PageTemplate.js'

class PageHome extends PageTemplate {
    constructor() {
        super();
        this.title = 'Home page';
    }

    mainHTML() {
        return `<div class="row">
                    <h1>Home page 🎅</h1>
                    <p>Stai kaip atrodo atidarantys (&lt;div&gt;) ir uzdarantys (&lt;/div&gt;) DIV tagai</p>
                </div>`;
    }
}

export { PageHome };