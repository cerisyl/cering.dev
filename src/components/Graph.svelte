<script lang="js">
  let { pack, song, diff } = $props();

  const diffSvg = {
    "Beginner":   "n",
    "Easy":       "e",
    "Medium":     "m",
    "Hard":       "h",
    "Challenge":  "x",
    "Edit":       "edit",
  }

  // import svgs
  const graphs = import.meta.glob(
    '/src/data/packs/**/graph/**.svg',
    { eager: true, query: '?raw', import: 'default' }
  );

  let graph = graphs[`/src/data/packs/${pack}/graph/${song.sid}-${diffSvg[diff]}.svg`];
</script>

<div class="chart-graph">
  {@html graph}
</div>