import InFieldsComponent from "./InFieldsComponent.js";
import Form from "./form.js";
import * as cfg from "../componentsDeclaration/configElements.js";


/*** КЛАССЫ - НАСЛЕДНИКИ формы FORM***/
export class VisitCardiologist extends Form {
    constructor(parent, {id, name, tag, componentClass, title} ) {
        super(parent, {id, name, tag, componentClass, title});
        this.ES6classTitle = "VisitCardiologist";
    }
    renderHeader(){
        super.render();
    }
    render(){
        const {component} = this._DOMelements;
        const visitorRegularPressure = new InFieldsComponent(component, cfg.pressure);
        visitorRegularPressure.render();

        const visitorBodyWeightIndex = new InFieldsComponent(component, cfg.bodyWeightIndex);
        visitorBodyWeightIndex.render();

        const hadDeseasesVisitorHasHad = new InFieldsComponent(component, cfg.hadDeseases);
        hadDeseasesVisitorHasHad.render();

        const age = new InFieldsComponent(component, cfg.age);
        age.render();


    }
}

export class VisitDentist extends Form {
    constructor(parent, {id, name, tag, componentClass, title} ) {
        super(parent, {id, name, tag, componentClass, title});
        this.ES6classTitle = "VisitDentist";
    }
    renderHeader(){
        super.render();
    }
    render(){
        const {component} = this._DOMelements;

        const lastVisitDate = new InFieldsComponent(component, cfg.lastVisitDate);
        lastVisitDate.render();
    }
}

export class VisitTherapist extends Form {
    constructor(parent, {id, name, tag, componentClass, title} ) {
        super(parent, {id, name, tag, componentClass, title});
        this.ES6classTitle = "VisitTherapist";
    }
    renderHeader(){
        super.render();
    }
    render(){
        const {component} = this._DOMelements;

        const age = new InFieldsComponent(component, cfg.age);
        age.render();

    }
}