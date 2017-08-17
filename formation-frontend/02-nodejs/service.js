
var devs = require("./data/devfest-2015.js");

function listerTousLesPresentateurs() {
    return devs.speakers;
}

function listerToutesLesSessions() {
    return devs.sessions;
}

function trouverUneSession(idSession) {
    sessions = listerToutesLesSessions();
    return sessions.find(function(element) {
        return element.id == idSession;
    });
}

function listerTopPresentateurs() {
    speakers = listerTousLesPresentateurs();
    return speakers.find(function(element) {
        return element.topspeaker == true;
    });
}

exports.listerTousLesPresentateurs = listerTousLesPresentateurs;
exports.listerToutesLesSessions = listerToutesLesSessions;
exports.trouverUneSession = trouverUneSession;
exports.listerTopPresentateurs = listerTopPresentateurs;
