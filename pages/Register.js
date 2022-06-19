import { PageTemplate } from '../lib/PageTemplate.js'

class PageRegister extends PageTemplate {
    constructor(data) {
        super(data);
        this.title = '404 server';
        this.pageJSfileName = 'register'
    }

    mainHTML() {
        return `<div class="row">
                    <p>Register 🎅</p>
                    <form class="form borderContainer" action="/api/account" methos="POST">
                        <label for="fullname">Fullname</label>
                        <input id="fullname" name="fullname" type="text" placeholder="name" required>
                        
                        <label for="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="Email" required>
                        
                        <label for="pass">Passworld</label>
                        <input id="pass" name="pass" type="password" placeholder="password" required>
                        
                        <label for="repass">Repeat password</label>
                        <input id="repass" name="repass" type="password" placeholder="repeat password" required>
                        
                        <label for="tos">please mark TOS agreement</label>
                        <input type="checkbox" id="tos" required>

                        <div></div>
                        <button type="submit">Register</button>
                    </form>
                </div>`;
    }
}

export { PageRegister };