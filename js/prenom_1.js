var name = prompt('Entrez votre prénom :');

for (var i = 0, nicks = '', nick; true; i++) {
    nick = prompt('Entrez le prénom de votre frère ou de votre soeur ' + name + ' :');
  
    if (nick) {
        nicks += nick + ' ';  
    } else {
        break;  
    }	
}


alert('Votre prénom est : ' + name);
alert('Le prénom de vos frères et soeurs sont : ' + nicks); // Affiche les prénoms à la suite
alert('Il y a ' + i + ' prénoms :\n\n' + nicks);

//Les deux caractères « \n » sont là pour faire des sauts de ligne. Un « \n » permet de faire un saut de ligne, donc dans le code précédent nous faisons deux sauts de ligne.