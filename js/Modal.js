export default class Modal {
    constructor(modal){
        this.modal = modal;
        this.self = document.createElement('div');
        this.modalWindow = document.createElement('div');
        this.modalHeader = document.createElement('div');
        this.modalTitle = document.createElement('h5');
        this.closeBtn = document.createElement('span');
        this.form = document.createElement('div');
    }
    renderModal(){
        this.self.classList.add('modal');
        this.self.setAttribute('id', 'modal')
        this.modalWindow.classList.add('modal-content');
        this.modalHeader.classList.add('modal-header');
        this.modalTitle.classList.add('modal-title');
        this.closeBtn.classList.add('close-modal');
        this.closeBtn.innerHTML = '&times;';
        this.form.classList.add('modal-form');
        this.modalHeader.append(this.modalTitle , this.closeBtn);
        this.modalWindow.append(this.modalHeader , this.form);
        this.self.append(this.modalWindow);
        modal.append(this.self);

        const autorization = document.querySelector('.btn_log');
        autorization.addEventListener('click', (event) =>{
          event.preventDefault();
            this.self.classList.add('active');
        });

        this.closeBtn.addEventListener('click', ()=> {
            this.self.classList.remove('active');
        });
        window.addEventListener('click', (e) =>{
            if (e.target === this.self){
                this.self.classList.remove('active');
            }
        });
    }
    
}