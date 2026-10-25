<script lang="js">
  import Graph from './Graph.svelte';

  let { pack, song, preferDesc=false } = $props();

  // get translit stuff
  // let title       = song.title
  let title       = song.titletranslit ? song.titletranslit : song.title
  // const subtitle  = song.subtitle
  const subtitle  = song.subtitletranslit ? song.subtitletranslit : song.subtitle
  // const artist    = song.artist
  const artist    = song.artisttranslit ? song.artisttranslit : song.artist

  const diffMap = {
    "Beginner":   "SN",
    "Easy":       "SE",
    "Medium":     "SM",
    "Hard":       "SH",
    "Challenge":  "SX",
    "Edit":       "ED",
  }

  // Determine BPM + tier
  // if song has multiple @ bpms
  const getBpm = (song, chart) => {
    const [dMin, dMax] = song.displaybpm;
    const detail = chart.detail ? chart.detail: "";
    let bpm = Math.round(dMax);
    let strBpm = bpm.toString();

    if (detail.includes("@")) {
      let [_, atBpm] = detail.split('@');
      bpm = atBpm.replaceAll(/\D/g,''); // fixes desc with "BPM+" or "BPM?"
      strBpm = atBpm;
    } else if (dMin !== dMax) {
      //detailNoBpm = detail;
      strBpm = `${Math.round(dMin)} - ${bpm}`;
    }
    return {
      value: strBpm,
      tier: Math.min(10 * Math.floor(bpm/10), 180)
    }
  }

  const getDetail = (chart) => {
    const detail = chart.detail ? chart.detail: "";
    if (detail.includes("@")) {
      let [detailSplit, _] = detail.split('@');
      return detailSplit.trim();
    } else {
      return detail;
    }
  }

  const charts      = song.difficulties;
  const [mainChart] = charts.filter(x => x.slot === "Challenge");
  const bpm         = getBpm(song, mainChart);

  // account for mixes
  title = song.songType === 1 ? title.replace("[Mix] ", "") : title;

  // function to import banners
  const banners = import.meta.glob(
    `/src/data/packs/**/bn/**.png`,
    { eager: true, query: '?url', import: 'default' }
  );
  let Banner = banners[`/src/data/packs/${pack}/bn/${song.sid}.png`]

  let curDiff = $state("Challenge");
  let [curChart] = $state(charts.filter(x => x.slot === curDiff));
  let curDetail = $state(getDetail(curChart));
  let curBpm = $state(getBpm(song, curChart));
  const changeDiff = slot => {
    curDiff = slot;
    [curChart] = charts.filter(x => x.slot === curDiff);
    curDetail = getDetail(curChart);
    console.log(curBpm)
    curBpm = getBpm(song, curChart);
    console.log(curBpm)
  }

  // handle card flips
  let isFlipped = $state(false);
  const toggleFlip = () => { isFlipped = true };

</script>

<div class="chart">
  <div class="chart-card" class:chart-card-flipped={isFlipped}>
    <div class="chart-bn{song.songType >= 1 ? "-mix" : ""}">
      <enhanced:img class="chart-img" src={Banner} alt="{artist} - {title}"/>
    </div>
    {#key curDiff}
      <Graph {pack} {song} diff={curDiff}/>
    {/key}
    <div class="chart-inner">
      <div class="chart-diffs">
        {#each song.difficulties as diff}
          {@const slot = diff.slot}
          {@const diffClass = `difficulty-${slot.toLowerCase()}`}
          <button onclick={() => changeDiff(slot)} class={slot === curDiff ? `${diffClass}-fill` : diffClass}>
            <span>{diff.difficulty}</span>
          </button>
        {/each}
      </div>
      <p class="chart-artist">{artist}</p>
      <p class="chart-title">{title} <span class="chart-subtitle">{subtitle}</span></p>
      {#key curDetail}
        {#if preferDesc}
          <p class="chart-desc">{curDetail}</p>
        {:else}
          {#if curDetail !== ""}
            <p class="chart-desc">{curDetail} @ <span class="bpm-{curBpm.tier}">{curBpm.value}</span></p>
          {:else}
            <p class="chart-desc"><span class="bpm-{curBpm.tier}">{curBpm.value}</span> BPM</p>
          {/if}
        {/if}
      {/key}
    </div>
    <!-- {#if song.lore !== undefined}
      <div class="chart-more-hover">
        <button onclick={() => toggleFlip()} class="chart-more">?</button>
      </div>
      <p class="chart-lore" href="mixes">
        {@html song.lore}
      </p>
    {/if} -->
  </div>
  {#if song.songType >= 1}
    <a class="chart-mix block-link" href="mixes">
      <p class="chart-mix-listen">listen to this!</p>
      <p class="chart-mix-play">►►►</p>
    </a>
  {/if}
</div>