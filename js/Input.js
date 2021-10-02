export default class Input{
    constructor({...options}){
        this.type = options.type;
        this.value = options.value;
        this.placeholder = options.placeholder;
        this.className = options.className;
        this.atr = options.atr;
        this.isRequierd = options.isRequierd;
        this.self = document.createElement('input');
    };
    createInput(){
        this.self.type = this.type;
        this.self.placeholder = this.placeholder;
        this.self.classList.add(this.className);
        this.self.value = this.value;
        this.self.setAttribute('name', this.atr);
        this.self.isRequierd = this.isRequierd;
        return this.self;

    }
}