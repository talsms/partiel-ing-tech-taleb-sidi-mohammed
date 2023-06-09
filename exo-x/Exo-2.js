class Avion {
    constructor(marque, modele, longueur, nbPlace, reservoir, vitesse) {
        this._marque = marque;
        this._modele = modele;
        this._longueur = longueur;
        this._nbPlace = nbPlace;
        this._reservoir = reservoir;
        this._vitesse = vitesse;
    }
// les variables sont définies avec "this._" pour indiquer qu'elles sont des propriétés privées de la classe.
// Parce que l'accès direct aux propriétés est considéré comme une mauvaise pratique (Celon le web) il peut entrainer des erreur de programmation.

    // getters
    get marque() {
        return this._marque;
    }

    get modele() {
        return this._modele;
    }

    get longueur() {
        return this._longueur;
    }

    get nbPlace() {
        return this._nbPlace;
    }

    get reservoir() {
        return this._reservoir;
    }

    get vitesse() {
        return this._vitesse;
    }

    // setters
    set marque(value) {
        this._marque = value;
    }

    set modele(value) {
        this._modele = value;
    }

    set longueur(value) {
        this._longueur = value;
    }

    set nbPlace(value) {
        this._nbPlace = value;
    }

    set reservoir(value) {
        this._reservoir = value;
    }

    set vitesse(value) {
        this._vitesse = value;
    }
}
