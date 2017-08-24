
export default class HttpController {
    constructor($http) {
        this.$http = $http;
        $http({method: "GET", url: "http://localhost:3000/trips"})
            .then(response => {
                this.villes = response.data;
            }), error => {
                console.log("Erreur lors de la réception des données");
            }
    }

    save(ville) {
        ville.price = parseInt(ville.price);

        this.$http({
            method: "PATCH",
            url: "http://localhost:3000/trips/"+ville.id,
            data: ville,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }


};