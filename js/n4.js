var operation = "";
var symbole = "+*-";

for (var i = 0; i < 1; i++)
	operation += symbole.charAt(Math.floor(Math.random() * symbole.length));


var chiffre1 = Math.floor(Math.random() * 10);

var chiffre2 = Math.floor(Math.random() * 10);

//------------------------------------------------------------------------------------------------------------------------//

var questionUtilisateur = prompt("Combien font "+ chiffre1 + " " + operation + " " + chiffre2 + " ?");
var reponseEntier = 0;
var reponseString = 0;

if (operation==="+")
	{
		reponseEntier = chiffre1 + chiffre2;
		reponseString = reponseEntier.toString();
	}
else if (operation==="*")
	{
		reponseEntier  = chiffre1 * chiffre2;
		reponseString = reponseEntier.toString();
	}
else if (operation==="-")
	{
		reponseEntier  = chiffre1 - chiffre2;
		reponseString = reponseEntier.toString();
	}

//------------------------------------------------------------------------------------------------------------------------

while (questionUtilisateur!==reponseString)
	{
		alert("Mauvaise réponse, recommencer");
		var questionUtilisateur = prompt("Combien font "+ chiffre1 + " " + operation + " " + chiffre2 + " ?");
	}

alert("Vous avez trouver, bravo");


