<script lang="js">
  let { title, subtitle, artist, length, trackNum, released, path, useRelease, albumArtist } = $props();
  const strpad2 = str => str.toString().padStart(2, "0");
  const mmss = n => {
    const mm = Math.floor(n / 60);
    const ss = Math.floor(n - mm * 60);
    return mm + ":" + strpad2(ss);
  };

  let currentTime = $state(0);
  let paused = $state(true);
  let isHovered = $state(false);
  let canSeek = $state(currentTime !== 0);
  let trackIcon = paused ? "" : "";
  //     󰎆
  // #9b7deb

  // add features in subtitle
  let artistFeature;
  const albumArtistMatch = artist.match(/(.*) \(/);
  if (albumArtistMatch) {
    if (albumArtistMatch[1].includes(albumArtist)) {
      artistFeature = artist.match(/\(ft\. (.*)\)/);
      artistFeature = artistFeature ? artistFeature[1] : null;
      console.log(artistFeature)
    }
  }

</script>

<div class="music-track">
  <button class="music-track-inner" onclick={() => paused = !paused}
  onmouseover={() => isHovered = true} onfocus={() => isHovered = true}
  onmouseout={() => isHovered = false} onblur={() => isHovered = false}
  style:background={
    isHovered ?
      "linear-gradient(90deg, #aa91ed 0%,  #aa91ed " + (currentTime / length * 100) + "%, #e9e8f5 " + (currentTime / length * 100) + "%)" :
      "linear-gradient(90deg, #b9a5ef 0%, #b9a5ef " + (currentTime / length * 100) + "%, transparent " + (currentTime / length * 100) + "%)"
  }>
    <audio hidden src={path.replace("static/","/")} preload="none"
    bind:paused bind:currentTime onended={() => currentTime = 0}></audio>
    <div class="music-track-main">
      {#if paused}
        <span class="music-track-ctrl">&nbsp;</span>
      {:else}
        <span class="music-track-ctrl-active">&nbsp;</span>
      {/if}
      <span class="music-track-num">
        {#if useRelease}
          {new Date(released).toUTCString().slice(5,16)}.
        {:else}
          {strpad2(trackNum)}.
        {/if}
      </span>
      {#if albumArtist !== artist && !albumArtistMatch}
        <span>{artist} - </span>
      {/if}
      <b>{title}</b>
      {#if subtitle}
        <i class="music-track-sub">({subtitle})</i>
      {/if}
      {#if artistFeature}
        <i class="music-track-sub">(ft. {artistFeature})</i>
      {/if}
    </div>
    <span class="music-track-length">
      [{currentTime !== 0 ? `${mmss(currentTime)} / ` : ""}{mmss(length)}]
    </span>
  </button>
  {#if paused}
    <button class="music-track-expander">󰋼&nbsp;</button>
  {/if}
</div>