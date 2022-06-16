import { PageTemplate } from '../lib/PageTemplate.js'

class PageLogin extends PageTemplate {
    constructor() {
        super();
        this.title = '404 server';
    }

    mainHTML() {
        return `<div class="row">
                    <h1>Login 🎅</h1>
                </div>`;
    }
}

export { PageLogin };