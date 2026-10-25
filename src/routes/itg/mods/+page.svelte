<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
	import GreebleLine from 'components/greebles/Line.svelte';
	import GreebleExs from 'components/greebles/Exs.svelte';
	import GreebleText from 'components/greebles/Text.svelte';
	import GreebleBlock from 'components/greebles/Block.svelte';
  import ChartSmall from 'components/ChartSmall.svelte';

  const data = [
    //{bn:"", title:"", pack:"", contrib:"", link:""},
    {bn:"m007", title:"Dead Heat", link:"https://www.youtube.com/watch?v=ATPGHzm1TmM"},
    {bn:"m006", title:"7thSense", pack:"OISRT (Day 2)", contrib: "Tetaes & Aura", link:"https://www.youtube.com/watch?v=_TOHniYoYD0"},
    {bn:"m005", title:"chrono diver -fragment-", pack:"OISRT (Day 1)", contrib: "Aura", link:"https://www.youtube.com/watch?v=jCXk6Rr6OWI"},
    {bn:"m004", title:"Wavestep", pack:"Mod Jam: Easy Modo", link:"https://www.youtube.com/watch?v=qtBu-nP8-2E"},
    {bn:"m003", title:"The Fall", pack:"Secr3t Satan - Th3 Nic3 On3", link:"https://www.youtube.com/watch?v=cpufFI7M86s"},
    {bn:"m002", title:"conflict", link:"https://www.youtube.com/watch?v=JE1iYgc1kGA"},
    {bn:"m001", title:"Venomous Firefly", pack:"Mod Rush", link:"https://www.youtube.com/watch?v=VX_Yt8O5e1Q"},
    {bn:"m000", title:"Paqqin", pack:"Secret Satan 2K19", link:"https://www.youtube.com/watch?v=EVRm9kTgDr4"},
  ];
</script>

<svelte:head>
  <Meta title="mods" desc='modfiles and sightreading tournaments'/>
</svelte:head>

<GreebleBlock text="itg :: mods"/>

<h1 class="h1-img">
  <img src="/img/headers/mods.png" alt="mods">
</h1>

<!--hero-size strip-->
<div class="strips">
  <div class="home-heroes-main">
    <p>featured release</p>
    <a href="/itg/njsrt" class="hero-withside block-link">
      <img src="/img/hero/njsrt.png" alt="New Jersey Sightreading Tournament">
    </a>
  </div>
  <a href="/itg/aster" class="strip block-link">
    <img src="/img/itg/aster.png" alt="Aster's Astral Adventure">
  </a>
  <a href="/itg/misfits" class="strip block-link">
    <img src="/img/itg/misfits.png" alt="Misfits in the Prairie">
  </a>
</div>

<h2 class="spacer0">singles</h2>
<p><span class="comment">links lead to video lineouts instead of file downloads. please refer to the video descriptions for download links!</span></p>

<div class="itg-small">
  {#each data as song}
    <ChartSmall {...song}/>
  {/each}
</div>