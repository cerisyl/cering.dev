<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
	import GreebleLine from 'components/greebles/Line.svelte';
	import GreebleExs from 'components/greebles/Exs.svelte';
	import GreebleText from 'components/greebles/Text.svelte';
	import GreebleBlock from 'components/greebles/Block.svelte';
</script>

<svelte:head>
  <Meta title="home" desc="a divine intranet being, netizen of the 2000s"/>
</svelte:head>

<GreebleBlock text="home"/>

<div class="home-heroes">
  <div class="home-heroes-main">
    <p>what's new?</p>
    <a href="/itg/streams2" class="hero-withside block-link">
      <img src="/img/hero/home-main.png" alt="CERiSTREAMS 2 is out now!">
    </a>
  </div>

  <GreebleLine noMargin right text="what else to see?"/>

  <div class="home-heroes-ex">
    <div class="home-heroes-ex-l">
      <a href="/rss.xml" class="hero block-link">
        <img src="/img/hero/home-sm.png" alt="Subscribe to the RSS feed">
      </a>
      <a href="/itg/mods" class="hero block-link">
        <img src="/img/hero/home-md.png" alt="Explore modfiles">
      </a>
    </div>
    <a href="/graphics" class="hero block-link">
      <img src="/img/hero/home-lg.png" alt="Graphics">
    </a>
  </div>
</div>

<GreebleExs/>

<!-- <div class="double">
  <div class="double-left">
    <h2>weekly thoughts</h2>
    <GreebleBlock text="date"/>
    <p>.</p>
    <h3>media</h3>
    <p>currently playing: <b>.</b></p>
  </div>
  <div class="double-right">
    <h2>media center</h2>
    <p>currently playing: <b>.</b></p>
    <p>currently watching: <b>.</b></p>
    <p>currently feeling: <b>.</b></p>
  </div>
</div> -->