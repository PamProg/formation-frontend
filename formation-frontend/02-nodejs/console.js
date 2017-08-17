
var readline = require('readline');
var service = require('./service.js');

console.log("*** Application Conférence ***\n",
            "1. Liste de tous les présentateurs\n",
            "2. Top présentateurs\n",
            "3. Liste des sessions\n",
            "4. Détail d'une session\n");


var tableauOptions = [afficherNomPrenomPresentateurs, 
                      afficherNomPrenomTopPresentateurs,
                      afficherTitreSessions,
                      afficherDescriptionPresentateurSession];

var interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

interface.on("line", (line) => {
    tableauOptions[parseInt(line)-1]();
});

function afficherNomPrenomPresentateurs() {
    var presentateurs = service.listerTousLesPresentateurs();
    presentateurs.map(p => p.firstname + " " + p.lastname)
                 .forEach(p => {console.log(p);});
}

function afficherNomPrenomTopPresentateurs() {
    var topPresentateurs = service.listerTopPresentateurs();
    topPresentateurs.map(p => p.firstname + " " + p.lastname)
                 .forEach(p => {console.log(p);});
}

function afficherTitreSessions() {
    var sessions = service.listerToutesLesSessions();
    sessions.map(s => s.title)
            .forEach(p => {console.log(p);});
}

function afficherDescriptionPresentateurSession() {
    interface.question("Choisissez un id de session ", (idSession) => {
        var session = service.trouverUneSession(idSession);

    console.log("Description :", session.desc, 
                "\nPrésentateur :", session.speakers);
    });
}