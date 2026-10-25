<script lang="js">
  let { title, artist, release_date, is_singles, tracks, artPath, titlePath="" } = $props();
	import MusicPart from 'components/MusicPart.svelte';

  const releaseYears = tracks.map(x => new Date(x.released).getFullYear());
  const minRelease = Math.min(...releaseYears);
  const maxRelease = Math.max(...releaseYears);
  const prettyDate = is_singles
    ? (minRelease !== maxRelease ? `${minRelease} - ${maxRelease}` : maxRelease)
    : new Date(release_date).toUTCString().slice(5,16);


</script>

<div class="music">
  <img class="music-art" src="/img/music/{artPath}.png" alt="Album art for {title}">
  <div class="music-meta">
    <div class="music-meta-main">
      {#if titlePath}
        <img class="music-meta-title" src="/img/music/{titlePath}.png" alt="{title}">
      {:else}
        <p class="music-meta-text">{title}</p>
      {/if}
      <p class="music-meta-detail">{artist} ∙ {prettyDate}</p>
    </div>
    <div class="music-meta-tracks">
      {#each tracks as track, i}
        <MusicPart {...track} useRelease={is_singles} albumArtist={artist} />
      {/each}
    </div>
    <!--
    <div class="music-meta-dl">
      <button>MP3</button>
      <button>FLAC</button>
    </div>
    -->
  </div>
</div>