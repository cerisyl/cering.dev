<script lang="js">
  let { title, icon, links } = $props();
</script>

<div class="nav-container">
  <div class="nav-section" aria-hidden="true">
    <span class="nav-section-icon">{icon}</span>
    <p class="nav-section-side">{title}</p>
  </div>
  <div class="nav-sublinks">
    <p class="nav-section-header">{title}<span></span></p>
    {#each links as link}
      <a class="block-link" href={link.href}><span class="nav-chip" aria-hidden="true">◤</span>{link.name}{#if link.extra}
        <span class="nav-attn">{link.extra}</span>
      {/if}</a>
    {/each}
  </div>
</div>