
export default class TripsService {
    constructor(apiUrls, $resource) {
        this.apiUrls = apiUrls;
        this.villeRes = $resource(apiUrls.light + '/:villeId', {villeId:"@id"})
    }

    findAll() {
        return this.villeRes.query();
    }
}