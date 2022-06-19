import { PageTemplate } from '../lib/PageTemplate.js'

class PageAccount extends PageTemplate {
    constructor(data) {
        super(data);
        this.title = '404 server';
    }

    mainHTML() {
        return `<div class="row">
                    <h1>Welcome my dude 🎅</h1>
                </div>`;
    }
}

export { PageAccount };