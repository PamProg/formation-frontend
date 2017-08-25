
export default class RaceService {
    constructor() {
        this.walkers = [
            { name: 'Paul', progress: 0, shirt: 'info' },
            { name: 'Jean', progress: 0, shirt: 'success' },
            { name: 'Julie', progress: 0, shirt: 'danger' }
        ]
    }
    update(name, progress) {
        let walker = this.walkers.find(w => w.name == name);
        walker.progress += progress;
    }
    list() {
        return this.walkers;
    }
}