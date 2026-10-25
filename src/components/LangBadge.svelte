<script>
  let { lang } = $props();
	import Tooltip from 'components/Tooltip.svelte';

  const langs = {
    // languages
    "py":     "Python",
    // scripting
    "bash":   "Bash",
    "ps":     "PowerShell",
    // webtech
    "svelte": "SvelteKit",
    "react":  "React",
    "ts":     "TypeScript",
    "js":     "JavaScript",
    // stylesheets
    "stylus": "Stylus",
    "sass":   "Sass",
    "css":    "CSS",
    // markup
    "pug":    "Pug",
    "html":   "HTML",
    // bundlers/servers
    "vite":   "Vite",
    "node":   "NodeJS",
    "apache": "Apache",
  }

  // import svgs
  const icons = import.meta.glob(
    '/src/img/langs/**.svg',
    { eager: true, query: '?raw', import: 'default' }
  );
  let icon = icons[`/src/img/langs/${lang}.svg`];
</script>

<div class="lang">
  <Tooltip text={langs[lang]}>
    {@html icon}
  </Tooltip>
</div>