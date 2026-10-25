<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
	import GreebleLine from 'components/greebles/Line.svelte';
	import GreebleExs from 'components/greebles/Exs.svelte';
	import GreebleText from 'components/greebles/Text.svelte';
	import GreebleBlock from 'components/greebles/Block.svelte';
	import Glitch from '../../../components/text/TextGlitch.svelte';
	import Action from 'components/Action.svelte';

  // function to import banners
  const banners = import.meta.glob(
    `/src/data/packs/aster/**.png`,
    { eager: true, query: '?url', import: 'default' }
  );
  let Banner = bn => banners[`/src/data/packs/aster/${bn}.png`];

</script>

<svelte:head>
  <Meta title="Aster's Astral Adventure" desc='45-117560: your designated identification assigned by governing body of planet Enotis'/>
</svelte:head>

<div class="aster">
	<h1 class="h1-img">
		<img src="/img/headers/aster.png" alt="Aster's Astral Adventure">
	</h1>

	<div class="spacer gaps-32">
		<Action link="https://github.com/cerisyl/mod-releases/raw/main/packs/Aster's%20Astral%20Adventure.zip" text="download" icon=""/>
		<Action link="https://www.dropbox.com/scl/fi/rdu8xtm5vadp7r7onx75h/Aster-s-Astral-Adventure.zip?rlkey=pq7as7kqfaalmvpj0yjcw8exn&st=4q6xawwu&dl=0" text="mirror 1" icon=""/>
		<Action link="https://drive.google.com/file/d/1-0XR3tHF53OVDkzzEHwSuN0JagyEjt7J/view?usp=sharing" text="mirror 2" icon=""/>
	</div>
	<p class="spacer2x right"><span class="comment">requires <a class="external" href="https://www.noti.tg/" target="_blank" rel="noopener">NotITG v3.1+</a></span></p>

	<h2>a new life on Enotis</h2>

	<img class="upsell-nw" src="/img/itg/upsell/aster-2.png" alt="an in-game screenshot of the first level of the series, Rugie. a faded outline of Aster can be seen in the background as various transparent arrows are seen around them."/>

	<p class="aster-section"><b>45-117560</b>. that is your designated identification assigned by governing body of planet Enotis. for the last 25 years, you have grown up in the gentle hands of this administration, safe and sound from danger, learning and preparing for the most important day in your life so far: your first contact with the outside world. in preparation for today, you have been put through many tests and trials to assess your skills, to better carve out a life path upon your release from Nursery, and today is your final test.</p>

	<p class="greeble-aster right">whoamiwhatami</p>

	<img class="upsell-se" src="/img/itg/upsell/aster-1.png" alt="a view from space of Enotis and its two moons, Ihlne and Aune."/>

  <p class="aster-section">the final test is simple. there's no need to study, and it only takes a few minutes. but you can't bring yourself to want to take it. there's something <Glitch text="clawing"/> at you that somehow...<br><br>you will fail.</p>

	<p class="greeble-aster">onenotisthatdaywillcome</p>

	<h2 class="spacer0">chapters</h2>
	<p><span class="comment">links lead to video lineouts instead of file downloads.</span></p>

	<a class="chart block-link" href="https://www.youtube.com/watch?v=0qQ5dcmA0uc" target="_blank" rel="noopener">
		<div class="chart-card">
			<div class="chart-bn">
				<enhanced:img class="chart-img" src={Banner("ch0")} alt="Chapter 0 - The Fugitive"/>
			</div>
			<div class="chart-inner">
				<p class="chart-artist">Chapter 0</p>
				<p class="chart-title">The Fugitive</p>
			</div>
		</div>
	</a>

</div>