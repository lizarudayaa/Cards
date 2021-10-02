// ДОМ-элементы создаваемые в WrapCardHTML.js:
export const DOM_elements = {
    'doctorEl':             ['Врач: ',                 "card-item",           'p'],
    'lastNameEl':           ['Фамилия: ',              "card-item",           'p'],
    'mainNameEl':           ['Имя: ',                  "card-item",           'p'],
    'patrNameEl':           ['Отчество: ',             "card-item",           'p'],
    'purposeEl':            ['Цель: ',                 "card-item --hidden",  'p'],
    'descriptionEl':        ['Описание: ',             "card-item --hidden",  'p'],
    'urgencyEl':            ['Срочность: ',            "card-item --hidden",  'p'],
    'pressureEl':           ['Норм.Давление: ',        "card-item --hidden",  'p'],
    'hadDeseasesEl':        ['Перенесённые болезни: ', "card-item --hidden",  'p'],
    'bodyWeightIndexEl':    ['инд.массы тела: ',       "card-item --hidden",  'p'],
    'ageEl':                ['Возраст: ',              "card-item --hidden",  'p'],
    'lastVisitDateEl':      ['Последнее посещение: ',  "card-item --hidden",  'p'],
};

export const visitorPropInVisitForm = {lastName: "visitor-last-name", mainName: "visitor-name", patrName: "visitor-patr-name", purpose: "purpose", description: "description", urgency: "urgency"};
export const visitorAdditionalProps = { hadDeseases: "visitor-deseases", bodyWeightIndex: "weight-index", pressure: "visitor-pressure", age: "visitor-age", lastVisitDate: "last-visit-date"};
export const visitorProp = {...visitorPropInVisitForm, ...visitorAdditionalProps};


/*** весь БЛОК КОДА НИЖЕ - это те же данные, что в объекте строки 1, но разбитые в виде двух отдельных массивов. - Блок нужен в проекте только для демонстрации альтернативных вариантов исполнения-
 * -  см. стр.23 в файле changeDoctor.js
 * -----------------------------------------------------------------------------------------------------***/

// visitorProps оставить для примера в строке 23 файла changeDoctor.js  и стр.12 файла card.js
export const visitorProps = ["lastName", "mainName",
    "patrName", "purpose", "description", "urgency", "hadDeseases",
    "bodyWeightIndex", "pressure", "age", "lastVisitDate"];

// visitorPropClasses оставить для примера в строке 23 файла changeDoctor.js  и стр.12 файла card.js
export const visitorPropClasses = ["visitor-last-name", "visitor-name",
    "visitor-patr-name", "purpose", "description", "urgency", "visitor-deseases",
    "weight-index", "visitor-pressure", "visitor-age", "last-visit-date"];

