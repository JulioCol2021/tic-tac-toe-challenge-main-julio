import Score from './score.js';
import Board from './board.js';
import Message from './message.js';
import PlayAgain from './playAgain.js';

export default {
  data() {
    return {
      board: Array(9).fill(null),
      currentPlayer: 'O',
      winner: null,
      scores: { O: 0, X: 0 },
      gameOver: false,
    };
  },
  methods: {
    makeMove(index) {
      if (!this.board[index] && !this.gameOver) {
        this.board[index] = this.currentPlayer;
        if (this.checkWinner()) {
          this.winner = this.currentPlayer;
          this.scores[this.currentPlayer]++;
          this.gameOver = true;
        } else if (this.board.every(cell => cell !== null)) {
          this.gameOver = true;
        } else {
          this.currentPlayer = this.currentPlayer === 'O' ? 'X' : 'O';
        }
      }
    },
    checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6]             // Diagonais
      ];
      return winningCombinations.some(combination => 
        combination.every(index => this.board[index] === this.currentPlayer)
      );
    },
    resetGame() {
      this.board.fill(null);
      this.currentPlayer = Math.random() < 0.5 ? 'O' : 'X';
      this.winner = null;
      this.gameOver = false;
    }
  },
  components: {
    Score,
    Board,
    Message,
    PlayAgain,
  },
  template: `
    <div class="game">
      <Score :player1="scores.O" :player2="scores.X" />
      <Board :board="board" :makeMove="makeMove" />
      <Message :text="gameOver ? (winner ? \`Jogador \${winner} vence!\` : 'Empate!') : \`É a vez do jogador \${currentPlayer}\`" />
      <PlayAgain v-if="gameOver" @play-again="resetGame" />
    </div>
  `,
};
