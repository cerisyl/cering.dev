<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
  import Chart from 'components/Chart.svelte';
	import _data from 'src/data/packs/odim/pack.json';
  import PackLogo from 'src/data/packs/odim/logo.png';

	import GreebleLine from 'components/greebles/Line.svelte';
	import GreebleBlock from 'components/greebles/Block.svelte';
	import Action from 'components/Action.svelte';

  const getMainChart = (song) => {
    return song.difficulties.filter(x => x.slot === "Challenge")[0];
  }

  // functions to sort by
  const getDiff = song => getMainChart(song).difficulty;
  const isMix = song => song.songType === 1;
  const getTitle = song => song.titletranslit ? song.titletranslit : song.title;
  const getBpm = song => {
    const [dMin, dMax] = song.displaybpm;
    const detail = getMainChart(song).detail ? getMainChart(song).detail: "";
    let bpm = Math.round(dMax);
    let strBpm = bpm.toString();

    if (detail.includes("@")) {
      let [_, atBpm] = detail.split('@');
      bpm = atBpm;
      strBpm = atBpm;
    } else if (dMin !== dMax) {
      strBpm = `${Math.round(dMin)} - ${bpm}`;
    }
    return strBpm;
  }

  // sort data
  let sortMode = "bpm"
  let data = _data;
  const sortData = (type) => {
    if (type === "bpm") {
      sortMode = "bpm"
      data = data
        .sort((a,b) => getDiff(a) - getDiff(b))
        .sort((a,b) => getBpm(a) - getBpm(b))
    } else if (type === "diff") {
      sortMode = "diff"
      data = data
        .sort((a,b) => getBpm(a) - getBpm(b))
        .sort((a,b) => getDiff(a) - getDiff(b))
    } else if (type === "alpha") {
      sortMode = "alpha"
      data = data
        .sort((a,b) => getTitle(a).localeCompare(getTitle(b), 'en', {'sensitivity': 'base'}))
    }
    data = data.sort((a,b) => isMix(a) - isMix(b))
  }

  // inital sort
  sortData("alpha");
</script>

<svelte:head>
  <Meta title="Omega Dimension" desc='an tech-oriented ITG minipack featuring music from the Omega Dimension series'/>
</svelte:head>

<GreebleBlock noMargin text="Ω dimension"/>

<div class="spacer center">
  <enhanced:img class="itg-logo" src={PackLogo} alt="Omega Dimension"/>
</div>

<div class="spacer2x gaps-32">
  <Action link="https://github.com/cerisyl/itg-releases/raw/main/packs/Xronial%20Xyzygy.zip" text="download" icon=""/>
  <Action link="https://www.dropbox.com/scl/fi/5aco98wxx6lgm8x2eldxq/Omega-Dimension.zip?rlkey=5iwc2pqy235ud35b9tso6bfbz&st=fkn56dn8&dl=1" text="mirror 1" icon=""/>
  <Action link="https://drive.google.com/file/d/1-PPFC8sLUhk11Cb7SzOAGe86OocFVMQ0/view?usp=sharing" text="mirror 2" icon=""/>
</div>

<div class="double spacer">
  <div class="double-left grow-2">
    <GreebleLine text="what is this?"/>
    <p><b>Omega Dimension</b> is a tech-oriented minipack featuring music from the Omega Dimension series from SOUND VOLTEX IV HEAVENLY HAVEN.</p>
  </div>
  <div class="double-right">
    <GreebleLine text="quick facts"/>
    <ul>
      <li>10 songs with full difficulties</li>
    </ul>
    <p>released <b>12 May 2019</b></p>
  </div>
</div>

<GreebleBlock text="songlist"/>

<div class="itg">
  <div class="gaps-space">
    <div><!----></div>
    <div class="gaps-16">
      <p class="togglebar-label">sort by</p>
      <div class="togglebar">
        <button onclick={() => {sortData("bpm")}} class:togglebar-on={sortMode === "bpm"} class="togglebar-first">bpm</button>
        <button onclick={() => {sortData("diff")}} class:togglebar-on={sortMode === "diff"} class="togglebar-piece">difficulty</button>
        <button onclick={() => {sortData("alpha")}} class:togglebar-on={sortMode === "alpha"} class="togglebar-piece">alphabetical</button>
      </div>
    </div>
  </div>
  {#each data as song (song.sid)}
    <Chart pack="odim" {song} preferDesc/>
  {/each}
</div>