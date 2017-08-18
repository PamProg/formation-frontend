let favoriteCityId = "rome";

console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
// citiesId = [];
citiesId.push("tokyo");
console.log(citiesId);

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {city, temperature};
}

const weather = getWeather(favoriteCityId);
console.log(weather);

const {city} = weather;
const {temperature} = weather;

console.log(city);
console.log(temperature);

const [parisId, nycId, ...otherCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(otherCitiesId.length);



class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return Trip.name + "[" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this._price + "]";
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", `img/rio-de-janeiro.jpg`);
    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");

console.log(parisTrip);
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());


class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price = 0) {
        super(id, name, imageUrl);
        this.price = price;
    }

    toString() {
        return "Free" + super.toString();
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());





class TripService {
    constructor() {
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {

                let values = this.trips.values();

                for(let value of values) {
                    if(value.name == tripName) {
                        resolve(value);
                    }
                }
                reject("No trip with name " + tripName);
            }, 2000);
        });
    }
}

class PriceService {
    constructor() {
        this.prices = new Map();
        this.prices.set("paris", 100);
        this.prices.set("rio-de-janeiro", 800);
    }

    findPriceByTripId(tripId) {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {

                let prixTrip = this.prices.get(tripId);

                if(prixTrip) {
                    resolve(prixTrip);
                } else {
                    reject("No price found for id " + tripId);
                }
            }, 2000);
        });
    }
}

let tripService = new TripService();
let priceService = new PriceService();

let tripFound = tripService.findByName("Paris");
tripFound.then(resTrip => {
    console.log("Trip found :", resTrip);
}, error => {
    console.log(error);
});

tripFound = tripService.findByName("Toulouse");
tripFound.then(resTrip => {
    console.log("Trip found :", resTrip);
}, error => {
    console.log(error);
});


tripFound = tripService.findByName("Rio de Janeiro");

tripFound.then(resTrip => {
    
    let priceFound = priceService.findPriceByTripId(resTrip.id);

    priceFound.then(resPrice => {
        console.log("Price found :", resPrice);
    }, error => {
        console.log(error);
    });
});


tripFound = tripService.findByName("Nantes");

tripFound.then(resTrip => {
    
    let priceFound = priceService.findPriceByTripId(resTrip.id);

    priceFound.then(resPrice => {
        console.log("Price found :", resPrice);
    }, error => {
        console.log(error);
    });
});