console.log("Entrée dans morpion.js");
/*********************************************
 *          Déclaration des fonction
 *********************************************/
function init() {
    console.log("Entrée dans la fonction : init()");
    // Déclaration des variables / constantes
    let gamesBoard = new Array();

    // Initialiser le plateaux de jeux avec les valeurs de départ
    initGamesBoard(gamesBoard);
    console.log(gamesBoard);

    playOnce(gamesBoard);
    
    
}

/**
 * Fonction qui initialise le plateaux de jeux du morpion avec ses valeurs de départ
 * @param {Array} plateauDeJeux 
 */
function initGamesBoard(plateauDeJeux){
    console.log("Entrée dans la fonction initGamesBoard()");
    const VIDE = " ";
    const TAILLE = 9;

    for (let i = 0; i < TAILLE; i++) {
        plateauDeJeux[i] = VIDE;
        
    }
    
}



function playOnce(plateauDeJeux) {
    console.log("Fonction : playOnce()");
    // Déclaration des variables
    let hasWon = false;
    let isPlayer1 = true;
    // Déclaration des variables pour le DOM
    let dom_textArea = document.getElementById("textArea");

    do {
        // Quand le joueurs 1 joue
        if(isPlayer1 = true){

        } 
        // Quand le joueurs 2 joue
        else {

        }
        isPlayer1 = !isPlayer1;
    } while (hasWon === false);

    console.log(plateauDeJeux);
}
// Jouer un coup

// Vérifier une victoire (Booléen)

// Changer le texte du bouton "Jouer / Restart"

// En cas de victoire, se faire plaisir en CSS

// Alterner entre un thème bleu ou rouge selon le joueurs qui joue