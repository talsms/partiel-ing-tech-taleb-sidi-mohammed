class Avion {
    constructor(marque, modele, longueur, nbPlace, reservoir, vitesse) {
        this.marque = marque;
        this.modele = modele;
        this.longueur = longueur;
        this.nbPlace = nbPlace;
        this.reservoir = reservoir;
        this.vitesse = vitesse;
    }
}
// Le constructeur prend les arguments pour chaque attribut et initialise l'objet Avion avec ces valeurs
let cetAvion = new Avion("Bowing", "GX80", 50, 180, 23800, 840);

// Et donc cela va créer un objet avion avec les valeurs que nous avons fournie pour les attributs

// Et pour afficher un attribut par exemple nombre de place on utilise 
console.log(cetAvion.nbPlace); // 180

