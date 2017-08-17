
var readline = require('readline');
var service = require('./service.js');

console.log("*** Application Conférence ***\n",
            "1. Liste de tous les présentateurs\n",
            "2. Top présentateurs\n",
            "3. Liste des sessions\n",
            "4. Détail d'une session\n");

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.on("line", (line) => {
    switch(line) {
        case "1":
            var presentateurs = service.listerTousLesPresentateurs();
            afficherNomPrenomPresentateurs(presentateurs);
            break;
        case "2":
            var topPresentateurs = service.listerTopPresentateurs();
            afficherNomPrenomPresentateurs(topPresentateurs);
            break;
        case "3":
            var sessions = service.listerToutesLesSessions();
            afficherTitreSessions(sessions);
            break;
        case "4":
            interface.question("Choisissez un id de session ", (idSession) => {
                afficherDescriptionPresentateurSession(idSession);
            });
            break;
        default:
            console.log("Ca n'est pas un choix possible");
            break;
    }
});

function afficherNomPrenomPresentateurs(presentateurs) {
    presentateurs.map(p => p.firstname + " " + p.lastname)
                 .forEach(p => {console.log(p);});
}

function afficherTitreSessions(sessions) {
    sessions.map(s => s.title)
            .forEach(p => {console.log(p);});
}

function afficherDescriptionPresentateurSession(idSession) {
    var session = service.trouverUneSession(idSession);

    console.log("Description :", session.desc, "\nPrésentateur :", session.speakers);
}