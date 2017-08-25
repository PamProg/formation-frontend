
export default class ServiceController {
    constructor(TripsService, StepsService, CommentsService) {
        this.TripsService = TripsService;
        this.StepsService = StepsService;
        this.CommentsService = CommentsService;

        this.trips = this.TripsService.findAll();
    }

    findSteps(tripId) {
        return this.StepsService.findStepsByTripId(tripId);
    }

    findComments(tripId) {
        return this.CommentsService.findByTripId(tripId);
    }

    selectedOption() {
        this.steps = this.findSteps(this.tripSelected);
        this.comments = this.findComments(this.tripSelected);
    }

    saveComment() {
        console.log(this.tripSelected);
        this.CommentsService.addComment(this.tripSelected, this.commentToSave);
    }

};
ServiceController["$inject"] = ["TripsService", "StepsService", "CommentsService"];