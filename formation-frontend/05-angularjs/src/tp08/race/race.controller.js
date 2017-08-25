
export default class RaceController {

    constructor(SimulatorService, RaceService) {
        this.SimulatorService = SimulatorService;
        this.RaceService = RaceService;
        this.walkers = this.RaceService.list();
    }

    lancerCourse() {

        if(this.walkers.find(w => w.progress >= 100)) {
            this.walkers.forEach(w => {w.progress = 0});
        }

        this.SimulatorService.start();
    }

    pariSur(name) {
        console.log("Vous avez parié sur", name);
        this.RaceService.pari = name;
    }
}