<script lang="js">
  let { title, pack, bn, link, contrib } = $props();

  // function to import banners
  const banners = import.meta.glob(
    `/src/data/packs/**/**.png`,
    { eager: true, query: '?url', import: 'default' }
  );
  let Banner = banners[`/src/data/packs/misc/${bn}.png`]
</script>

<div class="chart-small">
  <div class="chart-small-card">
    <div class="chart-small-bn">
      <enhanced:img class="chart-small-img" src={Banner} alt="{title}"/>
    </div>
    <a class="chart-small-inner block-link" href={link} target="_blank" rel="noopener">
      <p class="chart-small-meta">{title}
        {#if contrib}
          <span class="chart-small-contrib">(with {contrib})</span>
        {/if}
      </p>
      {#if pack}
        <p class="chart-small-desc">from <b>{pack}</b><span class="symbol"></span></p>
      {:else}
        <p class="chart-small-desc"><b>single</b><span class="symbol"></span></p>
      {/if}
    </a>
  </div>
</div>