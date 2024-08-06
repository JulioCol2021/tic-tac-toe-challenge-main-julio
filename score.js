export default {
  props: ['player1', 'player2'],
  template: `
    <div class="score">
      <b>Jogador 1:</b> <span class="victories">{{ player1 }}</span><br />
      <b>Jogador 2:</b> <span class="victories">{{ player2 }}</span>
    </div>
  `,
};
