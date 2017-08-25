
export default class ResourceController {
    constructor($resource) {
        const villeRes = $resource('http://localhost:3000/trips-details/:villeId', {villeId:"@id"}, {
    'update': { method:'PUT' }})
        this.villes = villeRes.query()
    }

    update(ville) {
        ville.$update();
    }

};
