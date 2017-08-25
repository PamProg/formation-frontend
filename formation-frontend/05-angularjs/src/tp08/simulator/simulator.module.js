import SimulatorService from "./simulator.service"
import RaceModule from "../race/race.module"

angular.module('simulatorModule', ["RaceModule"])
    .service("SimulatorService", SimulatorService)