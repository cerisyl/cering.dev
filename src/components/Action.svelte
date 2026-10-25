<script lang="js">
  let { link, text, icon, disabled=false, external=true } = $props();
  const classes = disabled ? "action-off" : "action";
  const target  = external ? "_blank" : "_self"
  const rel     = external ? "noopener" : ""
</script>

<a class={`${classes} block-link`} href={link} {target} {rel} title={text} aria-label={text}><span>{text}</span><span class="action-icon">{icon}&nbsp;</span></a>