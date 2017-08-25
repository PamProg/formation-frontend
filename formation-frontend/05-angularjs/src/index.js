console.log('Bonjour App');

// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html';
import tplTp02 from './tp02/vues.html';
import tplTp03 from './tp03/carrousel.html';
import tplTp04 from './tp04/forms.html';
import tplTp05 from './tp05/tripsList.html';
import tplTp06 from './tp06/tripsListDetails.html';
import tplTp07 from './tp07/tripsComments.html';
import tplTp08 from './tp08/race/race.html';

import angular from "angular";
import ngResource from "angular-resource";
import css from './tp04/forms.css';
import 'bootstrap/dist/css/bootstrap.css';

import CarrouselCtrl from './tp03/carrousel.controller'
import Form2Controller from './tp04/forms.controller'
import HttpController from './tp05/tripsList.controller'
import ResourceController from './tp06/tripsListDetails.controller'
import ServiceController from './tp07/tripsComments.controller'

import apiUrls from "./tp07/apiUrls.service"
import TripsService from "./tp07/trips.service"
import commentsService from "./tp07/comments.service"
import StepsService from "./tp07/steps.service"

import RaceModule from "./tp08/race/race.module"

// insertion du code HTML dans le corps de la page principale
// document.querySelector('body').innerHTML = [tplTp01, tplTp02, tplTp03, tplTp04, tplTp05, tplTp06, tplTp07, tplTp08].join('<hr>');
document.querySelector('body').innerHTML = [tplTp08].join('<hr>');

angular.module('tripApp', ["ngResource"])
       .controller(CarrouselCtrl.name, CarrouselCtrl)
       .controller(Form2Controller.name, Form2Controller)
       .controller(HttpController.name, HttpController)
       .controller(ResourceController.name, ResourceController)
       .controller(ServiceController.name, ServiceController)
       .constant("apiUrls", apiUrls)
       .service("TripsService", TripsService)
       .factory("CommentsService", commentsService)
       .service("StepsService", StepsService)


