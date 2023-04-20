-class Avion {
    constructor(marque, modele, longueur, nbPlace, reservoir, vitesse) {
      this.marque = marque;
      this.modele = modele;
      this.longueur = longueur;
      this.nbPlace = nbPlace;
      this.reservoir = reservoir;
      this.vitesse = vitesse;
    }
  }
  // Création du tableau et affichage des noms.
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
  
// J'ai testé le code dans la console du navigateur pour vérifier, et cela marche en m'affichant : Airbus, Boeing, Embraer, Bombardier, Fokker. 