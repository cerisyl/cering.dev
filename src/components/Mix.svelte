<script>
  let { title, artist, genre, srcRule, pack, packLink, artistOnly, songs } = $props();
  
  let mixSrc = title;
  if (srcRule) {
    const srcReplace = srcRule.in.match(/^\/.+\/$/)
      ? new RegExp(srcRule.in.replace(/\//g,""))
      : srcRule.in
    mixSrc = title.replaceAll(srcReplace, srcRule.out);
  };
</script>

<div class="mix">
  <div class="mix-metadata">
    <div class="mix-metadata-main">
      <div class="mix-title">
        <h3 class="spacer0">{title}</h3>
        {#if pack && packLink}
          <p class="mix-pack">from <a href={packLink} target="_blank" rel="noopener">{pack}</a></p>
        {:else if pack}
          <p class="mix-pack">from {pack}</p>
        {/if}
      </div>
      <p class="mix-artist">{artist}{!artistOnly ? " (mixed by CERiNG)" : ""}</p>
    </div>
    <p class="mix-genre">{genre}</p>
  </div>

  <div class="mix-player">
    <audio class="mix-audio" controls>
      <source src={`/media/mixes/${mixSrc}.mp3`} type="audio/mpeg"/>
    </audio>
    <a class="mix-download block-link" href={`/media/mixes/${mixSrc}.mp3`} target="_blank" download></a>
  </div>
  <div class="mix-contents">
    {#each songs as song}
      {@const mm = String(Math.floor(song.time / 60)).padStart(2, "0")}
      {@const ss = String(song.time % 60).padStart(2, "0")}
      <p class="mix-song">
        <b class="mix-song-time">{mm}:{ss}</b> <span>{song.song}</span>
      </p>
    {/each}
  </div>
</div>