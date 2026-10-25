<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
	import GreebleBlock from 'components/greebles/Block.svelte';
	import Action from 'components/Action.svelte';
	import ImageModal from 'components/ImageModal.svelte';
  import Masonry from 'svelte-masonry';

	let refreshLayout;
	let images = [
		{preview: "future-esoterica", title: "Future Esoterica", year: "2023", desc: "jacket art"},
		{preview: "breathe-in", title: "Breathe In", year: "2023", desc: "game graphic"},
		{preview: "whiteout", title: "Whiteout", year: "2023", desc: "game graphic"},
		{preview: "0x1311", title: "0x1311", year: "2023", desc: "game graphic"},
		{preview: "particle-arts", title: "Particle Arts (Satori Akatsuki Remix)", year: "2022", desc: "commission, jacket art"},
		{preview: "miracorp", title: "MiraCorp International", year: "2022", desc: "brand design"},
		{preview: "dangerous", title: "DANGEROOOOUS JUNGLE", year: "2023", desc: "commission, game graphic"},
		{preview: "farewell", title: "Farewell to Reality", year: "2023", desc: "game graphic"},
		{preview: "record-i", title: "Record I", year: "2022", desc: "digital artwork"},
		{preview: "chella", title: "CHELLA RIDE", year: "2023", desc: "game graphic"},
		{preview: "left2right", title: "LEFT2RIGHT", year: "2026", desc: "game graphic"},
		{preview: "enigma-ii", title: "Enigma II", year: "2023", desc: "commission, game graphic"},
		{preview: "cancer-towers", title: "Cancer Towers on Holy Road Hi-Way", year: "2022", desc: "digital artwork"},
		{preview: "created-world", title: "created world", year: "2022", desc: "digital artwork"},
		{preview: "itf", title: "In temporarily forever...", year: "2022", desc: "digital artwork"},
		{preview: "maractus", title: "Maractus Package", year: "2023", desc: "commission, game graphic"},
		{preview: "anything", title: "Anything Goes", year: "2023", desc: "commission, poster"},
		{preview: "de-stijl", title: "De Stijl: Finding order in a post-war society", year: "2022", desc: "layout design"},
		{preview: "frost-valley", title: "Live from Frost Valley", year: "2022", desc: "jacket art"},
		{preview: "awake", title: "Awake", year: "2023", desc: "game graphic"},
		{preview: "prm", title: "P.R.M", year: "2023", desc: "game graphic"},
		{preview: "eva", title: "The Evangelion Symphony", year: "2022", desc: "jacket art"},
		{preview: "keo", title: "KILL EACH OTHER", year: "2024", desc: "game graphic"},
		{preview: "hassemich", title: "Hasse Mich", year: "2026", desc: "game graphic"},
		{preview: "railgun", title: "Railgun Roulette", year: "2022", desc: "game graphic"},
		{preview: "lux", title: "LUX MORTIS", year: "2022", desc: "game graphic"},
		{preview: "synchro", title: "Synchronization", year: "2022", desc: "game graphic"},
		{preview: "iphaeneheme", title: "iphaeneheme", year: "2022", desc: "digital artwork"},
	];
	images.forEach((image, i) => {
		images[i].source = `/img/graphics/${image.preview}.png`;
		images[i].caption = `<span class="masonry-info-title">${image.title}</span> (${image.year}), ${image.desc}`;
	});

	let hideModal = $state(true);
	let modalIndex = $state(0)

	const createModal = i => {
		modalIndex = i;
		hideModal = false;
	};
  const onKeyDown = e => {
		if (e.key === "Escape") {
			hideModal = true;
		};
  };

</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<svelte:head>
  <Meta title="graphics" desc='graphic design work by cering'/>
</svelte:head>

<GreebleBlock text="gfx"/>

<h1 class="h1-img">
	<img src="/img/headers/graphics.png" alt="Graphics">
</h1>

<Masonry items={images} gridGap={'16px'} colWidth={'calc(33% - 16px * 3/4)'} bind:refreshLayout={refreshLayout}>
  {#each images as image, i}
    <button href="/" class="masonry-object block-link" onclick={() => {createModal(i)}}>
			<img class="masonry-img" src={`/img/graphics/lq/${image.preview}.webp`} alt={image.alt} onload={refreshLayout}/>
			<div class="masonry-info">
				<p class="masonry-info-main"><span class="masonry-info-title">{image.title}</span> ({image.year})</p>
				<p class="masonry-info-desc">{image.desc}</p>
			</div>
		</button>
  {/each}
</Masonry>

<!-- <div class="actions-right">
	<p class="large spacer0">like what you see?</p>
	<Action link="/commissions" text="commissions" icon="" external={false}/>
</div> -->

<ImageModal {images} bind:index={modalIndex} bind:hidden={hideModal}/>