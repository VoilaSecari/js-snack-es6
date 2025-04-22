// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const bikes = [
  {
    nome: "Bici 1",
    peso: 45,
  },
  {
    nome: "Bici 2",
    peso: 24,
  },
  {
    nome: "Bici 3",
    peso: 20,
  },
  {
    nome: "Bici 4",
    peso: 34,
  },
];
// Stampare a schermo la bici con peso minore.

let lightestBike;
for (const bike of bikes) {
  bike.peso;

  if (lightestBike === undefined || bike.peso < lightestBike.peso) {
    lightestBike = bike;
  }
}

console.log(lightestBike);
//end

// Snack2
// Creare un array di oggetti di squadre di calcio.

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const teams = [
  {
    nome: "Team rosso",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Team giallo",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Team rosa",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Team fucsia",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Team blu",
    punti: 0,
    falli: 0,
  },
];
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

for (let i = 0; i < teams.length; i++) {
  const currentTeam = teams[i];
  currentTeam.falli = getRandom(0, 5);
  currentTeam.punti = getRandom(0, 5);
}

console.table(teams);

//new array

const teamFalli = [];
for (let i = 0; i < teams.length; i++) {
  const currentTeam = teams[i];
  const teamFouls = {
    nome: currentTeam.nome,
    falli: currentTeam.falli,
  };
  teamFalli.push();
}

console.table(teamFalli);
