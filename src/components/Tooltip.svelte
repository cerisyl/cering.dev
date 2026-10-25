<script>
  let { children, text } = $props();
</script>

<div class="tooltip">
  {@render children()}
  <span class="tooltip-text">{text}</span>
</div>