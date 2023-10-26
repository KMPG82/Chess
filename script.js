const gameStart = [
    'rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook',
    'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn',
    'rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook',
];

const chessBoard = document.querySelector('.board');
console.log(chessBoard);


function setBoard() {
    for (let i = 0; i < gameStart.length; i++) {
        chessBoard.innerHTML += `<div class='square' id=${i + 1}> </div>`
    }
}
setBoard()
console.log(chessBoard);


