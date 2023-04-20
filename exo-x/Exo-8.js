const noms = ['Sid', 'Kelyan', 'Chaïma', 'Kwinlane', 'Melissa', 'Ana'];

function getRandomName() {
  const index = new Date().getTime() % noms.length;
  return noms[index];
}

console.log(getRandomName());
