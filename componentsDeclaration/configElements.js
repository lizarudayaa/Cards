import VisitForm from "../js/visitForm.js";
import WrapCardHTML from "../js/WrapCardHTML.js";
import { showLoginBtn, hideSelectForm, deleteVisitForm } from "../js/createBtn.js"

/*** КНОПКИ КАРТОЧКИ***/

//кнопка "Показать больше элементов карточки"
export const showMoreCardBtnCfg = {
    id: "show-btn",
    tag: "button",
    type: "button",  //TODO потом сменить на "submit"
    className: "card__show-more-btn btn btn-outline-success",
    innerText: "Показать больше",
    handler: (e) => {
        WrapCardHTML.showMoreCardItems(e);
    }
};

//кнопка "Редактировать элементы карточки"
export const editCardBtnCfg = {
    id: "edit-btn",
    tag: "button",
    type: "button",  //TODO потом сменить на "submit"
    className: "card__edit-btn btn btn-outline-success",
    innerText: "Редактировать карточку",
    handler: (e) => {
        WrapCardHTML.editCard(e);
    }
};

//кнопка "Удалить карточку"
export const deleteCardBtnCfg = {
    id: "delete-btn",
    tag: "button",
    type: "button",
    className: "delete-btn btn btn-outline-success",
    innerText: "Удалить карточку",
    handler: (e) => {
        WrapCardHTML.deleteCard(e);//TODO  решить вопрос с непринятым промисом
    }
};
//----------------------------------------------------------------



/*** КНОПКИ ФОРМ ***/

//кнопка "Создать карточку посещения"
export const createCardBtnCfg = {
    id: "create-btn",
    tag: "button",
    type: "button",
    className: "visit__create-btn  btn btn-outline-success return_btn",
    innerText: "Создать карточку посетителя",
    handler: VisitForm.formSubmitHandler
};


//кнопка "reset   -очистка данных формы"
export const resetBtnCfg = {
    id: "reset-btn",
    tag: "button",
    type: "reset",
    className: "visit__reset-btn  btn  btn-outline-success return_btn",
    innerText: "очистить форму",
    handler: function formResetHandler() { }
};


// кнопка "Закрыть"
export const closeBtnCfg = {
    id: "close-btn",
    tag: "button",
    type: "button",
    className: "visit__close-btn btn-outline-success return_btn",
    innerText: "Закрыть",
    handler: function cardCloseHandler() {
        deleteVisitForm();
        hideSelectForm(); //выключили форму выбора врача
        showLoginBtn();
    }
};
//----------------------------------------------------------------



/*** ЭЛЕМЕНТЫ ФОРМ ***/

// конфигурируем select - Выбор специализации врача к посещению:  Терапевт, стоматолог, кардиолог
export const doctorSelect = {
    id: "select-doctor",
    tag: "select",
    containerClass: "visit__container",
    elementClass: "visit__select",
    elementName: "selectDoctor",
    labelText: "Выберите Врача",

    options: [
        {
            id: 0,
            value: "Кардиолог",
            text: "запись к Кардиологу",
            defaultSelected: false,
        },
        {
            id: 1,
            value: "Стоматолог",
            text: "запись к Стоматологу",
            defaultSelected: false,
        },
        {
            id: 2,
            value: "Терапевт",
            text: "запись к Терапевту",
            defaultSelected: false,
        },
    ],

};

// цель визита:
export const purpose = {
    id: "purpose",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__purpose",
    elementName: "purpose",
    placeholder: "цель:",
    elementType: "text",
    labelText: "Цель визита:",
};

// краткое описание визита:
export const description = {
    id: "description",
    tag: "textarea",
    containerClass: "visit__container",
    elementClass: "visit__description",
    elementName: "description",
    placeholder: "--текст описания--",
    labelText: "Опишите цель визита:",
};

// конфигурируем select -срочность визита:   обычная, приоритетная, неотложная
export const urgency = {
    id: "urgency",
    tag: "select",
    containerClass: "visit__container",
    elementClass: "visit__urgency-select  al-c",
    elementName: "urgency",
    labelText: "Задайте срочность посещения:",

    options: [
        {
            value: "Обычная",
            text: "Не срочное посещение",
            defaultSelected: false,
        },
        {
            value: "Приоритетная",
            text: "Требуется встреча в ближайшее время",
            defaultSelected: false,
        },
        {
            value: "Неотложная",
            text: "Требуется экстренная встреча",
            defaultSelected: true,
        },
    ],

};


// конфигурируем Фамилию
export const lastName = {
    id: "visitor-last-name",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__last-name",
    elementName: "lastName",
    placeholder: "фамилия",
    elementType: "text",
    labelText: "введите Фамилию:",
};

// конфигурируем Имя
export const mainName = {
    id: "visitor-name",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__name",
    elementName: "mainName",
    placeholder: "имя",
    elementType: "text",
    labelText: "введите Имя:",
};

// конфигурируем Отчество
export const patrName = {
    id: "visitor-patr-name",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__patr-name",
    elementName: "patrName",
    placeholder: "отчество",
    elementType: "text",
    labelText: "введите Отчество:",
};

// конфигурация уникальных полей для заполнения к каждому из докторов
export const pressure = {
    id: "visitor-pressure",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__pressure",
    elementName: "pressure",
    placeholder: "пример: 120х80",
    elementType: "text",
    labelText: "Обычное давление посетителя:",
};
export const bodyWeightIndex = {
    id: "weight-index",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__weight-index",
    elementName: "bodyWeightIndex",
    elementType: "number",
    labelText: "Введите индекс массы тела:",
};
export const hadDeseases = {
    id: "visitor-deseases",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__hadDeseases",
    elementName: "hadDeseases",
    placeholder: "перенесённые болезни",
    elementType: "text",
    labelText: "Перечислить перенесенные болезни:",
};
export const age = {
    id: "visitor-age",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__visitor-age",
    elementName: "age",
    elementType: "number",
    labelText: "введите возраст посетителя:",
};

// для Стоматолога:
export const lastVisitDate = {
    id: "last-visit-date",
    tag: "input",
    containerClass: "visit__container",
    elementClass: "visit__last-visit-date",
    elementName: "lastVisitDate",
    placeholder: "формат: день.месяц.год",
    elementType: "date",
    labelText: "введите дату последнего посещения:",
};

/*и теперь возьмём все константы выше и завернем их в один конфигурационный объект: */
export const elemConfObj = { lastName: lastName, mainName: mainName, patrName: patrName, purpose: purpose, description: description, urgency: urgency, pressure: pressure, bodyWeightIndex: bodyWeightIndex, hadDeseases: hadDeseases, age: age, lastVisitDate: lastVisitDate };

export const login = {
    type: 'text',
    placeholder: 'Email',
    value: "uts_@ukr.net",
    className: 'modal_input',
    atr: 'text',
    isRequierd: true
}

export const password = {
    type: 'password',
    placeholder: 'Password',
    value: "slyslysly",
    className: 'modal_input',
    atr: 'password',
    isRequierd: true
}
export const btn = {
    type: 'submit',
    className: 'modal_login_button',
    atr: 'submit',
    value: 'Login',
}