console.log("Entrée dans morpion.js");
/***********************************************************************
 *          Déclaration des variables avec une portéé globale          *
 ***********************************************************************/
var dom_textArea, dom_buttonArea, dom_buttons, dom_text, dom_btn_play;
var hasWon, isPlayerOne;
var gameBoard;

const VIDE = "";
const PLAYER_ONE = "O";
const PLAYER_TWO = "X";

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

    reset();
}

/**
 * Fonction reset() qui réinitialise les différents valeurs afin de démarrer la partie
 */
function reset(){
    console.log("Entrée dans la fonction : reset()");

    // Je change le texte de dom_btnPlay
    dom_btn_play.innerText = "Recommencer une nouvelle partie";

    // J'hydrate les deux variables booléennes
    hasWon = false;
    isPlayerOne = true;

    // Je force les button.cell avec la propriété disabled = FALSE
    for (var i = 0; i < dom_buttons.length; i++) {
        dom_buttons[i].disabled = false;
    }

    // J'initialise le tableaux gameBoard qui represente le plateaux de jeu avec une valeur VIDE dans les 9 cellules
    gameBoard = new Array();
    for (var i = 0; i < dom_buttons.length; i++) {
        gameBoard[i] = VIDE;
    }

    // J'utilise le Array gameBoard pour affecter les bonnes valeurs dans le DOM (button.cell)
    for (var i = 0; i < dom_buttons.length; i++) {
        dom_buttons[i].innerText = gameBoard[i];
    }

    changeTextAndColor()
}

/**
 * Fonction changeTextAndColor() change le texte et la couleur du background selon le joueur qui joue actuellement
 */
function changeTextAndColor(){
    console.log("Entrée dans la fonction : changeTextAndColor()");
    // Si c'est au joueur 1
    if (isPlayerOne) {
        // Je donne la class player1 pour avoir le backgroud-color en Bleu
        dom_textArea.setAttribute("class", "player1");
        // MAJ du texte
        dom_text.innerText = "JOUEUR 1, à toi de jouer !"
    } else {
        // Je donne la class player1 pour avoir le backgroud-color en Bleu
        dom_textArea.setAttribute("class", "player2");
        // MAJ du texte
        dom_text.innerText = "JOUEUR 2, à toi de jouer !"
    }

    // Je vide la zone de texte
    dom_textArea.textContent = "";

    // Je mets à jour la zone de texte
    dom_textArea.appendChild(dom_text);
}

/**
 * Fonction clicCell qui est appelée au clic sur l'une des cases du morpion.
 * Elle prend deux paramètres :
 * - dom_self : représente la balaise sur laquelle le joueur a cliqué
 * - index : représente le numéro d'indice à utiliser pour manipuler le tableau JS gameBoard
 * @param {HTMLElement} dom_self 
 * @param {Number} index 
 */
function clicCell(dom_self, index){
    console.log("Entrée dans la fonction : clicCell()");

    // Je mets à jour gameBoard avec le symbole du joueur correspondant
    if (isPlayerOne) {
        gameBoard[index] = PLAYER_ONE;
    } else {
        gameBoard[index] = PLAYER_TWO;
    }

    // Avec le tableau JS (gameBoard), je mets à jour le plateau de jeu issu du DOM
    dom_self.innerText = gameBoard[index];

    // Je désactive le button qui à reçu le clic
    dom_self.disabled = true;

    // TODO : Faire la fonction !!!
    hasWon = isVictorious();

    // Si hasWon = true, alors je desactive tout les bouton.cell sinon, je change de joueur
    if (hasWon) {
        for (var i = 0; i < dom_buttons.length; i++) {
            dom_buttons[i].disabled = true;
        }

        // Je mets à jour le texte victorieux !! 
        dom_text.innerText = "Félicitation,";
        if (isPlayerOne) {
            dom_text.innerText += " JOUEUR 1";
        }
        else{
            dom_text.innerText += " JOUEUR 2";
        }
        dom_text.innerText += " a gagné !!!";
        
        // Je vide la zone de texte
        dom_textArea.textContent = "";

        // Je mets à jour la zone de texte
        dom_textArea.append(dom_text);
    } else {
        isPlayerOne = !isPlayerOne;
        changeTextAndColor();
    }
}

/**
 * Fonction isVictorious() vérifie si un joueur à gagné
 * Elle retourne VRAI (a gagné) ou FAUX (n'a pas gagné) selon le cas de figure
 */
function isVictorious(){
    // Je vérifie si c'est le tour de joueur 1
    if(isPlayerOne){
        if (
            // Ligne 1
            (gameBoard[0] == PLAYER_ONE && gameBoard[1] == PLAYER_ONE && gameBoard[2] == PLAYER_ONE) ||
            // ligne 2
            (gameBoard[3] == PLAYER_ONE && gameBoard[4] == PLAYER_ONE && gameBoard[5] == PLAYER_ONE) ||
            // Ligne 3
            (gameBoard[6] == PLAYER_ONE && gameBoard[7] == PLAYER_ONE && gameBoard[8] == PLAYER_ONE) ||
            // Colonne 1
            (gameBoard[0] == PLAYER_ONE && gameBoard[3] == PLAYER_ONE && gameBoard[6] == PLAYER_ONE) ||
            // Colonne 2
            (gameBoard[1] == PLAYER_ONE && gameBoard[4] == PLAYER_ONE && gameBoard[7] == PLAYER_ONE) ||
            // Colonne 3
            (gameBoard[2] == PLAYER_ONE && gameBoard[5] == PLAYER_ONE && gameBoard[8] == PLAYER_ONE) ||
            // diagonale 1 (en haut à gauche vers en bas à droite)
            (gameBoard[0] == PLAYER_ONE && gameBoard[4] == PLAYER_ONE && gameBoard[8] == PLAYER_ONE) ||
            // diagonale 2 (en haut à droite vers en bas à gauche)
            (gameBoard[2] == PLAYER_ONE && gameBoard[4] == PLAYER_ONE && gameBoard[6] == PLAYER_ONE)
        ) 
        {            
            return true;
        }
        else{
            return false
        }
    }
    // Je vérifie si c'est le tour de joueur 2
    else {
        if (
            // Ligne 1
            (gameBoard[0] == PLAYER_TWO && gameBoard[1] == PLAYER_TWO && gameBoard[2] == PLAYER_TWO) ||
            // ligne 2
            (gameBoard[3] == PLAYER_TWO && gameBoard[4] == PLAYER_TWO && gameBoard[5] == PLAYER_TWO) ||
            // Ligne 3
            (gameBoard[6] == PLAYER_TWO && gameBoard[7] == PLAYER_TWO && gameBoard[8] == PLAYER_TWO) ||
            // Colonne 1
            (gameBoard[0] == PLAYER_TWO && gameBoard[3] == PLAYER_TWO && gameBoard[6] == PLAYER_TWO) ||
            // Colonne 2
            (gameBoard[1] == PLAYER_TWO && gameBoard[4] == PLAYER_TWO && gameBoard[7] == PLAYER_TWO) ||
            // Colonne 3
            (gameBoard[2] == PLAYER_TWO && gameBoard[5] == PLAYER_TWO && gameBoard[8] == PLAYER_TWO) ||
            // diagonale 1 (en haut à gauche vers en bas à droite)
            (gameBoard[0] == PLAYER_TWO && gameBoard[4] == PLAYER_TWO && gameBoard[8] == PLAYER_TWO) ||
            // diagonale 2 (en haut à droite vers en bas à gauche)
            (gameBoard[2] == PLAYER_TWO && gameBoard[4] == PLAYER_TWO && gameBoard[6] == PLAYER_TWO)
        ) 
        {
            return true;
        }
        else{
            return false
        }
    }
}