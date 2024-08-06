import Tile from './tile.js';

export default {
  props: ['board', 'makeMove'],
  template: `
    <div class="board">
      <Tile v-for="(marker, index) in board"
            :key="index"
            :marker="marker"
            :index="index"
            @click="makeMove(index)" />
    </div>
  `,
  components: {
    Tile,
  }
};
