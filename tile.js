export default {
  props: ['marker', 'index'],
  template: `
    <button class="tile" @click="$emit('click', index)" :aria-label="'Tile ' + index" :title="'Tile ' + index">
      {{ marker }}
    </button>
  `,
};
