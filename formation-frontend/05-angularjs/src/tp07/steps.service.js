
export default class StepsService {
    constructor(apiUrls, $resource) {
        this.apiUrls = apiUrls;
        this.villeRes = $resource(apiUrls.full + '/:villeId', {villeId:"@id"})
        this.villes = this.villeRes.query();
    }

    findStepsByTripId(tripId) {
        return this.villes.find(v => v.id == tripId).steps;
    }
}