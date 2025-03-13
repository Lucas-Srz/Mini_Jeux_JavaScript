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
    // Récupère tous les éléments du DOM pour jouer une partie
    dom_textArea = document.getElementById("textArea");
    dom_buttons = document.getElementsByClassName("cell");
    dom_btn_play = document.querySelector("#btnPlay");

    // Création d'une balise 'p' pour mettre à jour le #textArea en vonction du joueurs qui joue
    dom_text = document.createElement("p");
}