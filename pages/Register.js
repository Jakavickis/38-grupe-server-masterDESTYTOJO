import { PageTemplate } from '../lib/PageTemplate.js'

class PageRegister extends PageTemplate {
    constructor() {
        super();
        this.title = '404 server';
    }

    mainHTML() {
        return `<div class="row">
                    <h1>Register 🎅</h1>
                </div>`;
    }
}

export { PageRegister };