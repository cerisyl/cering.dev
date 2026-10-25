<script lang="js">
  let { children, name, langs, live, source, image } = $props();
	import GreebleLine from './greebles/Line.svelte';
	import LangBadge from 'components/LangBadge.svelte';
	import Action from 'components/Action.svelte';
</script>

<div class="website-top">
  <h2 class="website-header">{name}</h2>
  {#each langs as lang}
    <LangBadge {lang}/>
  {/each}
</div>

<div class="website-actions spacer">
  {#if live}
    <Action link={live} text={"view live"} icon={""}/>
  {/if}
  {#if source}
    <Action link={source} text={"source"} icon={""}/>
  {/if}
</div>

<div class="website double">
  <div class="double-left">
    <enhanced:img class="website-img" src={image.src} alt={image.alt}/>
  </div>
  <div class="double-right">
    <GreebleLine text="about"/>
    <div class="website-desc">
      {@render children()}
    </div>
  </div>
</div>