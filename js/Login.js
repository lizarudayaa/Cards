import Server from "./server.js";
import Modal from "./Modal.js";
import VisitForm from "./visitForm.js";
import {handleData} from "./main.js";
import LoginForm from './LoginForm.js';

function renderSelectFormBtn(){
    VisitForm.renderIdleForm();
}

export function reassignLogBtn() {
    const modal = document.getElementById("modal");
    const loginBtn = document.getElementById("btn_log");
    const createCard = document.querySelector('.create_btn');
    loginBtn.style.display = 'none';
    modal.classList.remove('active');
    createCard.addEventListener("click", renderSelectFormBtn);
    createCard.classList.remove('none')
}


export default function Login() {
    class LoginModal extends Modal {
        constructor(modal){
            super(modal);
            this.modalTitle.textContent = 'Welcome';
           
        }
        renderModal(modal){ 
            super.renderModal(modal);
            const content = new LoginForm();
            content.render(this.form);
            const submitBtn = document.querySelector('.modal_login_button');
            submitBtn.addEventListener("click", (event) => {  
                event.preventDefault();
                this.checkUserLogin().then();})
        }

        async getToken(loginInput, passInput){
            return await Server.getTokenFromServer({email: loginInput, password: passInput});
        }

        async checkUserLogin(){

            let token;
            const loginInput = document.querySelector(".modal_input").value;
            const passInput = document.getElementsByName("password")[0].value;
            try{
            token = await this.getToken(loginInput, passInput);
            } catch(err) {console.log(err.name, err.message)}

            if (token === "Incorrect username or password" || token === undefined) {
                throw new Error("Такой пользователь не зарегистрирован, либо token undefined !");
            }
            else
            localStorage.setItem('token', `${token}`);
            handleData(localStorage.getItem('token')).then(); // получили все карточки с сервера и выложили на рабочий стол
            reassignLogBtn(); //переназзначили кнопку логина на кнопку "создать форму"
            // console.log("Вы залогинились!");
            document.querySelector(".modal").classList.remove("active");
        }

    }

     new LoginModal().renderModal();

}

