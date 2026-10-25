<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
	import GreebleBlock from 'components/greebles/Block.svelte';
	import GreebleExs from 'components/greebles/Exs.svelte';
	import Mix from 'components/Mix.svelte';
  import data from 'src/data/mix.yaml';
</script>

<svelte:head>
  <Meta title="mixes" desc='mixes for the ITG community'/>
</svelte:head>

<GreebleBlock text="mixes"/>

<h1 class="right">mixes</h1>

<h2>Stamina RPG</h2>
{#each data.srpg as mix}
	<Mix {...mix}/>
{/each}

<GreebleExs/>

<h2 class="spacer0">CERiSTREAMS 2</h2>
<p><a href="/itg/streams2">Download CERiSTREAMS 2</a></p>
{#each data.streams2 as mix}
	<Mix {...mix}/>
{/each}

<h2 class="spacer0">CERiSTREAMS</h2>
<p><a href="/itg/streams">Download CERiSTREAMS</a></p>
{#each data.streams as mix}
	<Mix {...mix}/>
{/each}

<GreebleExs/>

<h2 class="spacer0">soul2sky</h2>
<p>Future release</p>
{#each data.porter as mix}
	<Mix {...mix}/>
{/each}

<GreebleExs/>

<h2 class="spacer0">other</h2>
{#each data.misc as mix}
	<Mix {...mix}/>
{/each}