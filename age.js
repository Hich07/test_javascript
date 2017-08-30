var age = parseInt(prompt("Quel âge avez-vous ?"));

if (age <= 0){
			alert ("Vous n'êtes pas encore né(e) donc vous devez avoir des super-pouvoirs pour écrire sans corps");
}	else if (1 <= age && age <= 7){
			alert ("Vous n'êtes pas encore majeur et êtes surdoué(e) pour intéragir à un si jeune âge");
} else if (8 <= age && age <= 17){
			alert ("Vous n'êtes pas encore majeur(e)");
} else if (18 <= age && age <= 49){
			alert ("Vous êtes majeur dans la fleur de l'âge ! Profitez en pour faire plein de bêtises !");
} else if (50 <= age && age <= 61){
			alert ("Vous êtes senior mais pas encore retraité donc tout n'est pas encore perdu, c'est le dernier moment qu'il vous reste avant de devenir un vieux");
} else if (62 <= age && age <= 120){
			alert ("Vous êtes retraité, profitez de votre temps libre ! Enfin s'il vous reste de l'énergie bien sûr...");
} else if (age > 120){
			alert ("Vous êtes immortel décidément !");
} else {
			alert ("Vous n'avez pas entré un âge !");
}