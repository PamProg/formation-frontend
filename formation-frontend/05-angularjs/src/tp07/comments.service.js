
class CommentsService {
    constructor(apiUrls, $resource) {
        this.apiUrls = apiUrls;
        this.villeRes = $resource(apiUrls.full + '/:villeId', {villeId:"@id"}, 
                {'update': { method:'PUT' }})
        this.villes = this.villeRes.query();
    }

    findByTripId(tripId) {
        return this.villes.find(v => v.id == tripId).comments;
    }

    addComment(tripId, comment) {
        let ville = this.villes.find(v => v.id == tripId);
        if(!ville.comments) {
            ville.comments = [];
        }
        ville.comments.push({id: "anonymous", text: comment});
        ville.$update();
    }
}

const commentsService = (apiUrls, $resource) => {
    return new CommentsService(apiUrls, $resource);
}

export default commentsService;