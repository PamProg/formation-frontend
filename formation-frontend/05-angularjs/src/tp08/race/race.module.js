import RaceController from './race.controller'

import RaceService from "./race.service"
import SimulatorService from "../simulator/simulator.service"

const RaceModule = angular.module('raceModule', [])
    .controller("RaceController", RaceController)
    .service("RaceService", RaceService)
    .service("SimulatorService", SimulatorService)

export default RaceModule;