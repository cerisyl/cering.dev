<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
  import Chart from 'components/Chart.svelte';
	import _data from 'src/data/packs/streams/pack.json';
  import PackLogo from 'src/data/packs/streams/logo.png';

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
  sortData("bpm");
</script>

<svelte:head>
  <Meta title="CERiSTREAMS" desc="the first entry in CERiNG's mainline stamina series"/>
</svelte:head>

<GreebleBlock text="stamina :: 01"/>

<div class="spacer center">
  <enhanced:img class="itg-logo" src={PackLogo} alt="CERiSTREAMS"/>
</div>

<div class="spacer2x gaps-32">
  <Action link="https://github.com/cerisyl/itg-releases/raw/main/packs/CERiSTREAMS.zip" text="download" icon=""/>
  <Action link="https://www.dropbox.com/scl/fi/7ki7xgio8c2ssip3fopzx/CERiSTREAMS.zip?rlkey=q57adb68uzszqyvem49aobiw2&e=1&st=bpy4jmdy&dl=1" text="mirror 1" icon=""/>
  <Action link="https://drive.google.com/file/d/1u2wyB-pdXf-_R02abaloYYKUL9kwvmdQ/view?usp=sharing" text="mirror 2" icon=""/>
</div>

<div class="double spacer">
  <div class="double-left grow-2">
    <GreebleLine text="what is this?"/>
    <p><b>CERiSTREAMS</b> is the first entry in the mainline stamina series.</p>
    <p>with the intention of introducing new and old ITG players into the stamina space, this pack primarily focuses on training to achieve a 17 pass through mastery of the 120-174 BPM range.</p>
  </div>
  <div class="double-right">
    <GreebleLine text="quick facts"/>
    <ul>
      <li><b>25</b> songs with <b>full difficulties</b></li>
      <li><b>3</b> original, marathon-length mixes</li>
      <li><b>40</b> featured artists</li>
      <li><b>Over 4,500</b> measures of streams</li>
      <li>featured in <b>Stamina RPG</b> and <b>ITL Online</b></li>
    </ul>
    <p>released <b>07 June 2025</b></p>
  </div>
</div>

<GreebleBlock text="songlist"/>

<div class="itg">
  <div class="gaps-space">
    <div class="gaps-8"></div>
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
    <Chart pack="streams" {song}/>
  {/each}
</div>