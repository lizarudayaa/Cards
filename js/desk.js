import WrapCardHTML from "./WrapCardHTML.js";
import Server from "./server.js";
export default class Desk {
    static cardDesk =
        `<div class="search_nav">
            <div class="search_header">
                <div class="search_icons">
                    <span class="icon_btn close"></span>
                    <span class="icon_btn minimize"></span>
                    <span class="icon_btn maximize"></span>
                </div>
                <!--                Bootstrap Test Inputs          -->
                <div class="input">
                    <input id="search-by-description" type="text" placeholder="Search name">
                    <select id="visit-status" class="form_sm form-select " aria-label=".form-select-sm example">
                        <option value="">Показать все</option>
                        <option value="актуален">Визит актуален</option>
                        <option value="закрыт">Визит прошёл</option>
                    </select>
                    <select id="urgency-status" class="form-select form_sm " aria-label=".form-select-sm example">
                        <option value="">Показать все</option>
                        <option value="Обычная">Обычная</option>
                        <option value="Приоритетная">Приоритетная</option>
                        <option value="Неотложная">Неотложная</option>
                    </select>
                </div>
            </div>

            <div id= "card-container" class="main_content-window">
                <p id="no-cards-note" class="main_content-text">
                    No Cards Added.
                    Login!
                </p>
            </div>
        </div>`;

    constructor(){
    }
    static render(){
        document.getElementById('desk').insertAdjacentHTML("afterbegin", Desk.cardDesk);
    }

    static addCard(newCardObj) { //здесь, в newCardObj уже есть id
        // debugger
        if (document.getElementById("visit-form"))  document.getElementById("visit-form").remove();

        if (document.getElementById("no-cards-note")) document.getElementById("no-cards-note").remove();
        // Здесь создаём HTML карточку и переходим к выкладыванию ее на стол desk !
        const cardContainer = document.getElementById("card-container");
        const newCard = new WrapCardHTML(cardContainer, newCardObj);
        newCard.render();
    }

    static async refreshDesk() { //обновляет на столе всекарточки с получением их из БД
        const renewedCards = await Server.getAllCards(localStorage.getItem('token'));
        renewedCards.forEach(card => Desk.addCard(card));
    }
}


