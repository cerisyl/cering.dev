<script lang="js">
  let { text, noMargin=false, dotted=false, right=false } = $props();
  const classList = ["greeble-block"];
  if (noMargin) { classList.push("greeble-no-margin") }
  if (right) { classList.push("greeble-is-right") }
  const classes = classList.join(" ");
</script>

<p class={classes} aria-hidden="true" tabindex="-1">{text}</p>