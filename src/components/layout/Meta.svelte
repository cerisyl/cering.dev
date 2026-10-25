<script lang="js">
  let { title, desc, noindex=false } = $props();
</script>

<title>{title} – cering.dev</title>
<meta name="title" content="{title} – cering.dev"/>
<meta name="og:title" content="{title} – cering.dev"/>
<meta name="description" content={desc}/>
<meta name="og:description" content={desc}/>
{#if noindex}
  <meta name="robots" content="noindex, nofollow"/>
{:else}
  <meta name="robots" content="index, nofollow"/>
{/if}
{#if process.env.NODE_ENV === 'production'}
  <script defer src="https://us.umami.is/script.js" data-website-id="a12c2cdf-3c43-47e3-a089-8daf4adb09f4"></script>
{/if}