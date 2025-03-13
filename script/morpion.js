console.log("Entrée dans morpion.js");
/***********************************************************************
 *          Déclaration des variables avec une portéé globale          *
 ***********************************************************************/
var dom_textArea, dom_buttonArea, dom_buttons, dom_text, dom_btn_play;
var hasWin, isPlayerOne;
var gamesBoard;

const VIDE = "";
const PLAYER_ONE = "O";
const PLAYER_TOW = "X";

/*********************************************
 *          Déclaration des fonction         *
 *********************************************/
/**
 * Fonction init() qui inisalise le début de la partie
 * Elle récupère tous les éléments du DOM qui seront manipulés lors de l'exécution du jeux
 * Puis elle demande à reset (remettre les valeurs du jeux à zéro) la partie
 */
function init() {
    console.log("Entrée dans la fonction : init()");
    // Déclaration des variables / constantes
    let gamesBoard = new Array();
    let hasWon = false;
    let isPlayer1 = true;

    const VIDE = " ";

    // Initialiser le plateaux de jeux avec les valeurs de départ
    initGamesBoard(gamesBoard,VIDE);

    playOnce(gamesBoard);
    console.log(gamesBoard);
    
    
    
}

/**
 * Fonction qui initialise le plateaux de jeux du morpion avec sa valeur "vide" dans les 9 cellules
 * @param {Array} plateauDeJeux 
 * @param {string} caracter
 */
function initGamesBoard(plateauDeJeux, caracter){
    console.log("Entrée dans la fonction initGamesBoard()");
    const TAILLE = 9;

    for (let i = 0; i < TAILLE; i++) {
        plateauDeJeux[i] = caracter;
    }
}


/**
 * Fonction qui manipule le DOM afin de rendre le plateaux de jeux clicables 
 */
function playOnce() {
    console.log("Fonction : playOnce()");
    // Déclaration des variables pour le DOM
    let dom_all_cell = document.getElementsByClassName("cell");
    // Rendre le plateaux cliquable
    for (let i = 0; i < dom_all_cell.length; i++) {
        dom_all_cell[i].setAttribute("onclick", "detectCell(" + i + ")");
        // console.log(i);
    }

}

/**
 * TODO : Documentation à faire
 * @param {Number} index 
 */
function detectCell(index){
    console.log("Fonction : detectCell()s");
    console.log(index);
}

// let newP = document.createElement("p");
// let dom_textArea = document.getElementById("textArea");
// let dom_all_p = document.getElementsByTagName("p");

// Mettre à jour le texte
// for (let i = dom_all_p.length - 1; i >= 0; i--) {
//     dom_all_p[i].remove();
// }
// newP.innerText = "Joueurs 1, à toi de jouer !";
// dom_textArea.appendChild(newP);
// dom_textArea.setAttribute("class","player1");


// Jouer un coup

// Vérifier une victoire (Booléen)

// Changer le texte du bouton "Jouer / Restart"

// En cas de victoire, se faire plaisir en CSS

// Alterner entre un thème bleu ou rouge selon le joueurs qui joue