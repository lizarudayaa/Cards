import Form from "./form.js"
import {CreateBtn} from "./createBtn.js"
import InFieldsComponent from "./InFieldsComponent.js"
import * as cfg from "../componentsDeclaration/configElements.js"
import {elemConfObj} from "../componentsDeclaration/configElements.js"
import * as cfig from "../componentsDeclaration/configForms.js"
import {CardHandler} from "./card.js"
import {newCardHandle} from "./newCardHandle.js"
import WrapCardHTML from "./WrapCardHTML.js"
import {visitorPropInVisitForm} from "../componentsDeclaration/configVisProp.js"
import {hideLoginBtn, showLoginBtn, hideSelectForm, showSelectForm, deleteVisitForm} from "./createBtn.js"

/***  Класс для формирования Формы Визитов  ***/
export default class VisitForm extends Form {

    constructor(parent, {id, tag, componentClass, title}) {
        super(parent, {id, tag, componentClass, title});
        this.ES6classTitle = "VisitForm";
    }

    static renderIdleForm() { // общий метод рендеринга исходной формы  selectForm
        if ( document.getElementById("btn_log") ) document.getElementById("btn_log").remove();
        if ( document.querySelector(".create_btn") ) {
            hideLoginBtn();
        }
        const selectForm = new VisitForm(document.getElementById("modal"), cfig.visitFormCfg);
        selectForm.render();
    }

    bodyCloseHandler({target}) { //TODO перестало работать закрывание формы по клику вне формы
        if (target.closest('#visit-form') || target.closest('#select-form') || target.tagName === "OPTION" ) return;
        else
        {
            if (document.getElementById("visit-form")) { //по закрытию формы визита, скрываем обе формы:
                deleteVisitForm();
                hideSelectForm(); //выключили форму выбора врача
                showLoginBtn();
            }

        }
    }


    static async formSubmitHandler() { //обработчик кнопки "создать" (карточку)
        try {
            const card = new CardHandler(); //здесь получаю просто сырой ОБЪЕКТ значений из инпут-полей формы
            /* card.correctUndefinds();  - этот метод раньше использовался для заполнение всех "undefined" полей ввода, но более
                                    лаконичное решение оказалось:  this.lastName = document.getElementsByName(").value || "";*/
            newCardHandle(card); //отправил новую карточку на сервер, в рендер и в locakStorage
            showLoginBtn();
            deleteVisitForm();
            hideSelectForm(); //выключили форму выбора врача
        } catch (err) {
            (console.log(err.name, err.message))
        }
    }

    static async saveModifiedCard(cardIdToDelete){

       await VisitForm.formSubmitHandler();
        //а теперь удалим старую карточку, если мы сюда попали из режима редактирования имеющейся карточки
        await WrapCardHTML.deleteCard(null, cardIdToDelete);
    }    //удаление предыдущей (старой) карточки сделать только после подтверждения кнопкой "сохранить"



    static initForm(myForm) {
        myForm.action = "#";
        myForm.setAttribute("acceptCharset", "utf-8");
        myForm.enctype = "application/x-www-form-urlencoded";  //"text/plain";  http://htmlbook.ru/html/form/enctype
        myForm.method = "post";
        myForm.noValidate = true;
        myForm.autocomplete = "off";
        // myForm.addEventListener("submit", () => VisitForm.formSubmitHandler());
    }

    //выполняем эту ф-цию сразу после выбора доктора
    static renderAdditionalFields(innerComponent) {  //innerComponent это и есть наша form к выводу в сервер
        VisitForm.initForm(innerComponent); //в инициализации прописываем все необходимые артибуты формы для работы с сервером

        const instances = [];
            Object.entries(visitorPropInVisitForm).forEach( ([key, value])=> {
            instances[key] = new InFieldsComponent(innerComponent, elemConfObj[key] );
            instances[key].render();
        });
/* Код выше (стр.70-73) заменяет хардкод в строках ниже (стр.76-87) */
        // const lastName = new InFieldsComponent(innerComponent, cfg.lastName);
        // lastName.render();
        // const mainName = new InFieldsComponent(innerComponent, cfg.mainName);
        // mainName.render();
        // const patrName = new InFieldsComponent(innerComponent, cfg.patrName);
        // patrName.render();
        // const purpose = new InFieldsComponent(innerComponent, cfg.purpose);
        // purpose.render();
        // const description = new InFieldsComponent(innerComponent, cfg.description);
        // description.render();
        // const urgency = new InFieldsComponent(innerComponent, cfg.urgency);
        // urgency.render();
    }

    // создаём кнопки closeBtn, createBtn для формы ввода пациентов
    static showButtons(innerComponent) {
        const btnContainer = document.createElement("div");
        btnContainer.className = "visit-form__button-container";
        const closeBtn = new CreateBtn(btnContainer, cfg.closeBtnCfg);
        const createBtn = new CreateBtn(btnContainer, cfg.createCardBtnCfg);
        const resetBtn = new CreateBtn(btnContainer, cfg.resetBtnCfg);
        innerComponent.append(btnContainer);
        closeBtn.render();
        createBtn.render();
        resetBtn.render();
    }

    render() {
        super.render();
        const {component} = this._DOMelements;

        const selectDoctor = new InFieldsComponent(component, cfg.doctorSelect);
        selectDoctor.render();
        document.addEventListener("click", this.bodyCloseHandler);
    }

}
