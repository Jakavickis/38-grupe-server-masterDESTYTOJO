import { PageTemplate } from '../lib/PageTemplate.js'

class PageLogout extends PageTemplate {
    constructor(data) {
        super(data);
        this.title = '404 server';
    }

    mainHTML() {
        return `<div class="row">
                    <h1>Logout, peace out my dude 🎅</h1>
                </div>`;
    }
}

export { PageLogout };