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

// Le tableau dans l'Exo-3.
  const avions = [
    new Avion('Airbus', 'A320', 37.6, 180, 23800, 871),
    new Avion('Boeing', '737', 39.5, 215, 23850, 834),
    new Avion('Embraer', 'E190', 36.2, 114, 17350, 829),
    new Avion('Bombardier', 'CRJ1000', 39.1, 104, 21390, 828),
    new Avion('Fokker', '100', 35.53, 109, 13930, 823)
    ];
  
  for (let i = 0; i < avions.length; i++) {
    console.log(avions[i].marque);
  }
  
// Création de la fonction qui compe le nombre total de place depuis un tableau
function nbtotalPlacesAvions(tableauAvions) {
    let nbTotalPlaces = 0;
    for (let i = 0; i < tableauAvions.length; i++) {
      nbTotalPlaces = nbTotalPlaces + tableauAvions[i].nbPlace;
    }
    return nbTotalPlaces;
  }

// Pour tester on utilise :
// Appel de la fonction totalPlacesAvions avec le tableau d'avions en argument
let total = nbtotalPlacesAvions(tableauAvions);

// Affichage du résultat dans la console
console.log("Le nombre total de places dans le tableau d'avions est : " + total);
  