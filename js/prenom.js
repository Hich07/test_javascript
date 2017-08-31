var name = prompt('Entrez votre prénom :');


var nicks = '',
    nick,
    proceed = true;

while (proceed) {
    nick = prompt('Entrez le prénom de votre frère ou de votre soeur ' + name + ' :');

    if (nick) {
        nicks += nick + ' '; // Ajoute le nouveau prénom ainsi qu'une espace juste après
    } else {
        proceed = false; // Aucun prénom n'a été entré, donc on fait en sorte d'invalider la condition
   		//sinon à la place de proceed = false, on peut écrire : break; // On quitte la boucle
    }
}

alert('Votre prénom : ' + name);
alert('Le prénom de vos frères et soeurs sont : ' + nicks); // Affiche les prénoms à la suite