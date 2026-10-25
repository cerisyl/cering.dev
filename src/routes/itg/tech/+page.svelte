<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
	import GreebleLine from 'components/greebles/Line.svelte';
	import GreebleExs from 'components/greebles/Exs.svelte';
	import GreebleText from 'components/greebles/Text.svelte';
	import GreebleBlock from 'components/greebles/Block.svelte';
  import ChartSmall from 'components/ChartSmall.svelte';

  const data = [
    //{bn:"", title:"", pack:"", contrib:"", link:""},
    {bn:"t005", title:"Barely See", pack:"sorae's stax 2", contrib:"sorae", link:"https://bit.ly/stax2-dl"},
    {bn:"t004", title:"Transfer Function", pack:"Maractus Package 2", contrib:"Maractus", link:"https://drive.google.com/file/d/1-KH_Kdvp-36skYzv-4zxvFhYmqjPMv6d/view?usp=sharing"},
    {bn:"t003", title:"drnfctn", pack:"15gays1pack", link:"https://mega.nz/file/YmUFVSxR#jprhxH3W-UBcxm3UpPX0LhAYBkgtm0c3wJebWlyzAU0"},
    {bn:"t002", title:"GETCHA! (GX Jersey Club Edit)", pack:"Secret S4t4n four (20) [6_9]", link:"https://drive.google.com/drive/folders/1drvLC92kq4NvaKO0dL3hj1PudeGbke9Z?usp=drive_link"},
    {bn:"t001", title:"Teriqma", pack:"Technical Showcase 4", link:"https://xrgtmx.github.io/Technical-Showcase-4/downloads.html"},
    {bn:"t000", title:"FREEM THEME 64", pack:"Secret Sa2an", link:"https://drive.google.com/drive/folders/1VMrCm_OFZn2wXyeOgVYvlQ4yQueKJQ3i?usp=drive_link"},
  ];
</script>

<svelte:head>
  <Meta title="tech" desc='ITG tech releases by CERiNG'/>
</svelte:head>

<GreebleBlock text="itg :: tech"/>

<h1 class="h1-img">
  <img src="/img/headers/tech.png" alt="tech">
</h1>

<h2>packs</h2>

<!--hero-size strip-->

<div class="strips">
  <a href="/itg/xronial" class="strip block-link">
    <img src="/img/itg/xronial.png" alt="Xronial Xyzygy">
  </a>
  <a href="/itg/odim" class="strip block-link">
    <img src="/img/itg/odim.png" alt="Omega Dimension">
  </a>
</div>

<h2>singles / collabs</h2>

<div class="itg-small">
  {#each data as song}
    <ChartSmall {...song}/>
  {/each}
</div>