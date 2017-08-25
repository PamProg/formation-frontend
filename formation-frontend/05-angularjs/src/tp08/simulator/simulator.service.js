export default class SimulatorService {

    constructor(RaceService, $interval) {
        this.RaceService = RaceService;
        this.$interval = $interval;
        this.walkers = this.RaceService.list();
    }

    start() {
        let stopTime = this.$interval(() => {
            let min = 10;
            let max = 30;

            this.walkers.forEach(w => {
                this.RaceService.update(w.name, Math.floor(Math.random() * (max-min)) + min);
            })

            if(this.walkers.some(w => w.progress >= 100)) {
                let walker = this.walkers.find(w => w.progress >= 100);
                if(walker.name == this.RaceService.pari) {
                    console.log(("Vous avez gagné votre pari !")); 
                } else {
                    console.log(("Vous avez perdu votre pari !")); 
                }
                this.$interval.cancel(stopTime);
            }

        }, 1000);
    }
}