
var readline = require('readline');
var service = require('./service.js');

console.log("*** Application Conférence ***\n");

var tableauOptions = [{id: 1, libelle: "1. Liste de tous les présentateurs", exec:afficherNomPrenomPresentateurs}, 
                      {id: 2, libelle: "2. Top présentateurs", exec: afficherNomPrenomTopPresentateurs},
                      {id: 3, libelle: "3. Liste des sessions", exec: afficherTitreSessions},
                      {id: 4, libelle: "4. Détail d'une session", exec: afficherDescriptionPresentateurSession}];

var interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

tableauOptions.forEach(e => {
    console.log(e.libelle);
    interface.on("line", (line) => {
        var option = tableauOptions.find(o => o.id == parseInt(line));
        option.exec();
    });
});



function afficherNomPrenomPresentateurs() {
    var presentateurs = service.listerTousLesPresentateurs();
    afficherNomPrenom(presentateurs);
}


function afficherNomPrenomTopPresentateurs() {
    var topPresentateurs = service.listerTopPresentateurs();
    afficherNomPrenom(topPresentateurs);
}

function afficherNomPrenom(presentateurs) {
    presentateurs.map(p => p.firstname + " " + p.lastname)
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