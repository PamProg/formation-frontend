
export default class Form2Controller {
    constructor() {
        this.currentUser = {};
        this.savedUser = {};
    }

    reset() {
        this.currentUser.name = this.savedUser.name;
        this.currentUser.email = this.savedUser.email;
    }

    save() {
        this.savedUser.name = this.currentUser.name;
        this.savedUser.email = this.currentUser.email;
    }
};