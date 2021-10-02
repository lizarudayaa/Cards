export function showLoginBtn() {
    const loginBtn = document.querySelector(".create_btn");
    loginBtn.classList.remove("--hidden");
}

export function hideLoginBtn() {
    const btnLog = document.querySelector(".create_btn");
    btnLog.classList.toggle("--hidden", true);
}

export function hideSelectForm() {
    if (document.getElementById("select-form")) {
        const selectForm = document.getElementById("select-form");
        selectForm.classList.toggle("--hidden", true);
        selectForm.remove();
    }
}

export function showSelectForm() {
    document.getElementById('select-form').classList.remove("--hidden");

}

export function deleteVisitForm() {
    const visitForm = document.getElementById("visit-form");
    visitForm.classList.toggle("--hidden", true);
    visitForm.remove();
}


export class CreateBtn {
    constructor(parent, {id, tag, type, className, innerText, handler}) {
        this.id = id;
        this.tag = tag;
        this.type = type;
        this.className = className;
        this.innerText = innerText;
        this.btnEl = document.createElement(this.tag);
        this.handler = handler;
        this.parent = parent;
    }

    render() {
        const {id, type, className, innerText, btnEl, parent} = this;
        btnEl.id = id;
        btnEl.className = className;
        btnEl.type = type;
        btnEl.innerText = innerText;
        btnEl.addEventListener('click', this.handler);
        parent.append(btnEl);
    }
}
