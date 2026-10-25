<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
	import GreebleBlock from 'components/greebles/Block.svelte';
  import ChartSmall from 'components/ChartSmall.svelte';

  const data = [
    //{bn:"", title:"", pack:"", contrib:"", link:""},
    {bn:"s007", title:"La Machine De Danse", pack:"East Coast Stamina 15", contrib:"Archi, mang, @@, & Rems", link:"https://drive.google.com/file/d/1MTUmFQgmrtJc0Y0JE_4NbwmPsifywgFZ/view?usp=sharing"},
    {bn:"s006", title:"Mixmag Mix Of The Week 2012-03-07 [Edit]", pack:"DRILLBOT LOSTAM V2", contrib:"DRILLBOT, clionne, & Janus5k", link:"https://mega.nz/file/8ikU2YZL#aKhYjo6REmd-kI5S3PT1jMQf7fPYukaLNCqVl39a7aE"},
    {bn:"s006", title:"Now U Know Tha Deal 4 Real (Chrissy Murderbot Remix)", pack:"DRILLBOT LOSTAM V2", link:"https://mega.nz/file/8ikU2YZL#aKhYjo6REmd-kI5S3PT1jMQf7fPYukaLNCqVl39a7aE"},
    {bn:"s005", title:"Exospace Expedition", pack:"Stamina RPG 9", contrib:"Manwich, Robbumon, & DRILLBOT", link:"https://srpg9.groovestats.com/"},
    {bn:"s004", title:"ITC Jams EXTRA STAGE", pack:"Xynn's Mix Tapes 2", contrib:"Xynn, mang, & sorae", link:"https://drive.google.com/file/d/1YFWIPhFQDZ_w22lIOxvW-GZ88dZ-po-j/view?usp=sharing"},
    {bn:"s003", title:"GOODDRILL", pack:"Xynn's Mix Tapes 2", link:"https://drive.google.com/file/d/1YFWIPhFQDZ_w22lIOxvW-GZ88dZ-po-j/view?usp=sharing"},
    {bn:"s002", title:"In The Club", pack:"pack.dat.3", contrib:"mang", link:"https://bit.ly/pack_dat_3"},
    {bn:"s001", title:"Ideology", pack:"pack.dat.3", contrib:"mang", link:"https://bit.ly/pack_dat_3"},
    {bn:"s000", title:"Cheerleader", pack:"pack.dat.2", contrib:"", link:"https://bit.ly/pack_dat_2"},
  ];
</script>

<svelte:head>
  <Meta title="stamina" desc='ITG stamina releases by CERiNG'/>
</svelte:head>

<GreebleBlock text="itg :: stamina"/>

<h1 class="h1-img">
  <img src="/img/headers/stamina.png" alt="stamina">
</h1>

<h2>packs</h2>

<!--hero-size strip-->
<div class="strips">
  <div class="home-heroes-main">
    <p>featured release</p>
    <a href="/itg/streams2" class="hero-withside block-link">
      <img src="/img/hero/streams2.png" alt="CERiSTREAMS 2">
    </a>
  </div>
  <a href="/itg/streams" class="strip block-link">
    <img src="/img/itg/streams1.png" alt="CERiSTREAMS">
  </a>
</div>

<h2>singles / collabs</h2>

<div class="itg-small">
  {#each data as song}
    <ChartSmall {...song}/>
  {/each}
</div>