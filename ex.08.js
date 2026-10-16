const choix = ["pierre","feuille","ciseaux"];
const ordi = choix[Math.floor(Math.random() * 3)];

const prompt = require("prompt-sync") (); 

for(let i=0;i<choix.leight;i++) {
	console.log(i+1 ,"-", choix[i]);
}

const choixJoueur=Number(prompt("Entrez votre choix 1,2,3);