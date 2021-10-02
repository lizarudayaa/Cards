import changeDoctor from "./changeDoctor.js";

export default class InFieldsComponent {

    constructor(parent, {...args}) { //получаем: id, tag, containerClass, elementClass, elementType, elementName, labelText, placeholder, options
        this.ES6classTitle = InFieldsComponent;
        for (let [key, value] of Object.entries(args)) {
            value && (this[key] = value)
        }

        this._DOMelements = {
            parent: parent,
            component: document.createElement('p'),
            selfEl: document.createElement(`${this.tag}`),
            labelEl: document.createElement("label"),
        }
    }

    render() {

        const {parent, selfEl, labelEl, component} = this._DOMelements;
        const {tag, containerClass, elementClass, labelText, options} = this;
        if (tag === 'select') {
            for (let i = 0; i < options.length; i++) {
                selfEl.add(new Option(options[i].text, options[i].value, options[i].defaultSelected, options[i].defaultSelected));
                selfEl.size = options.length; // TODO  пока что раскрыли select полностью
            }
        }

        selfEl.className = elementClass;
        const {id, elementName, elementType, placeholder} = this;
        if (elementName) selfEl.name = elementName;
        if (elementType) selfEl.type = elementType;
        if (placeholder) selfEl.placeholder = placeholder;
        selfEl.id = id;
        if (id === "select-doctor") {
            selfEl.addEventListener("click", (e) => {
                changeDoctor(e, null, null);
            });
        }

        labelEl.htmlFor = `${id}`;
        labelEl.innerText = labelText;

        component.className = containerClass;
        component.style.display = "block";

        labelEl.style.display = "block";

        component.append(labelEl, selfEl);
        parent.append(component);
    }
}
