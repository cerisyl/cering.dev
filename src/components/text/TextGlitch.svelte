<script>
  // adapted from Markdown Plus - https://oat.zone/markdown-plus
  let { text, intensity=1 } = $props();
	import { onMount } from 'svelte';

	let styles = $state(Array(text.length).fill(''));

  const rand  = (m=1, b=0) => intensity * m * (Math.floor(Math.random() * 100) / 100) + b;
  const srand = (m=1, b=0) => intensity * m * (rand() * 2 - 1) + b;
  const glitch = () => {
    return `
      display: inline-block;
      transform:
        translate(${srand(5)}%,${srand(5)}%)
        scale(${rand(0.3, 1)},${rand(0.3, 1)})
        skewX(${srand(5)}deg)
        skewY(${srand(5)}deg);
    `;
  }

	onMount(() => {
		const interval = setInterval(() => {
			styles = styles.map(() => glitch());
		}, 75);
		return () => clearInterval(interval);
	});
</script>

{#each text as char, i}
  <span style={styles[i]}>{char}</span>
{/each}