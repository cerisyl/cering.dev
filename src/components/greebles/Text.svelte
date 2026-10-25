<script lang="js">
  let { text, noMargin=false, dotted=false, right=false } = $props();
  const classList = ["greeble-text"];
  if (noMargin) { classList.push("greeble-no-margin") }
  if (right) { classList.push("greeble-is-right") }
  const classes = classList.join(" ");

  let randChars     = "";
  const chars       = "0123456789ABCDEF";
  const charsLen    = chars.length;
  const lengthToGen = 101 - text.length;
  for (let i = 0; i < lengthToGen; i++) {
    randChars += chars.charAt(Math.floor(Math.random() * charsLen));
  }
</script>

<p class={classes} aria-hidden="true" tabindex="-1">
  <span class="greeble-text-main">{text}</span>
  <!-- <span>{randChars}</span> -->
</p>