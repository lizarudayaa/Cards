import Input from './Input.js'
import {login , password, btn} from '../componentsDeclaration/configElements.js'

export default class LoginForm {
    constructor(){
        this.self = document.createElement('form');
        this.login = new Input(login).createInput();
        this.password = new Input(password).createInput();
        this.button = new Input(btn).createInput();
    }
    render (modal){
        this.self.setAttribute('id', 'form-login');
        this.login.setAttribute('id', 'login');
        this.password.setAttribute('id', 'password');
        this.self.append(this.login , this.password , this.button);
        modal.append(this.self)
    }
}