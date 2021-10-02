import Server from "./server.js";
import Desk from "./desk.js";

export function newCardHandle(card) { //card еще не содержит id - он потом прилелит с сервера
    // отправил карточку из формы на сервер, получил её же с полем "id" в response и направил на рендер на экран
    Server.createCard(card,  localStorage.getItem('token') ).then(res => {
        Desk.addCard(res);   // и отправил объект res сервера- в новую карточку на рендер на экран
    // на этом этапе, res уже содержит полученный от сервера id
    });
}

