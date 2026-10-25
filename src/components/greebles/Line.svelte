<script lang="js">
  let { text, color="dark", noMargin=false, dotted=false, right=false } = $props();
  const classList = ["greeble-line"];
  if (noMargin) { classList.push("greeble-no-margin") }
  if (dotted) { classList.push("greeble-is-dotted") }
  if (right) { classList.push("greeble-is-right") }
  const classes = classList.join(" ");
</script>

<p class={classes} aria-hidden="true" tabindex="-1">{text}</p>