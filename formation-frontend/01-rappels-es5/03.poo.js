
function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = function(){return this.nom + this.prenom + this.pseudo;}
}

var jules = new Personne("Jules", "LEMAIRE", "jules77");
var paul = new Personne("Paul", "LEMAIRE", "paul44");

function afficherPersonne(personne) {
    console.log(personne.nom, personne.prenom, personne.pseudo, personne.getNomComplet());
}

afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = "jules44";
console.log(jules.getNomComplet());

console.log(jules.age);
Personne.prototype.age = "NON RENSEIGNÉ";
console.log(jules.age);
jules.age = 30;
console.log(jules.age);


Personne.prototype.getInitiales = function() {
    
}