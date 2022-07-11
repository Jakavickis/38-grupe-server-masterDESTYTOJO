import { PageTemplate } from '../lib/PageTemplate.js'
import config from '../config.js';

class PageLogin extends PageTemplate {
    constructor(data) {
        super(data);
        this.pageCSSfileName = 'auth';
        this.pageJSfileName = 'login';
    }

    mainHTML() {
        const isDev = config.name === 'dev';
        const formValues = {
            email: isDev ? 'chuck@norris.com' : '',
            pass: isDev ? 'chuck@norris.com' : '',
        }
        return `<div class="row">
                    <p>Login 🎅</p>
                    <form class="form borderContainer" action="/api/token" method="POST">
                        <div class="notifications"></div>
                        
                        <label for="email">Email</label>
                        <input id="email" name="email" type="email" data-validation="email" placeholder="Email" required value="${formValues.email}">
                        
                        <label for="pass">Passworld</label>
                        <input id="pass" name="pass" type="password" data-validation="password" placeholder="password" required value="${formValues.pass}">

                        <div><div>
                        <button class="registerButton" type="submit"><span>Login</span></button>
                    </form>
                </div>`;
    }
}

export { PageLogin };