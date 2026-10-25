<script lang="js">
	import Logo from 'src/img/logo.svelte';
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import { fly } from 'svelte/transition';

  // Titles
  const _titles = [
    // computers
    "girl inside your pc",
    "living on a pentium 4",
    "lain online irl",
    "haunting your hard drive",
    // programming
    "nix enthusiast",
    // itg
    "stamina gamer",
    "arrow engineer",
    // nostalgia
    "vaporwave philosopher",
    "netizen of the 2000s",
    "your digital angel",
    "divine intranet being",
    // misc
    "coffee addict",
  ];

  // Shuffle
  let titles;
  const maxTitles = _titles.length - 1;
  const getTitles = () => {
    for (let i = maxTitles; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [_titles[i], _titles[j]] = [_titles[j], _titles[i]];
    }
    titles = _titles;
  };
  onMount(getTitles);

  // Handle animation
  let curTitle = 0;
  let titleVisible = true;
  const toggleTitle = () => titleVisible = !titleVisible;
  const updateTitle = async () => {
    await setTimeout(() => {
      toggleTitle();
      curTitle = (curTitle + 1) % maxTitles;
    }, 0);
    await setTimeout(toggleTitle, 440);
  }
  const handleAwait = async () => {
    await setTimeout(updateTitle, 8500);
  }

  // Battery icon
  let battery;
  const bats = {
    day:  ['󰁹','󰂂','󰂁','󰂀','󰁿','󰁾','󰁽','󰁼'],
    nite: ['󰂋','󰂊','󰢞','󰂉','󰢝','󰂈','󰂇','󰂆'],
  }
  const now = new Date;
  const nowLoc = now.toLocaleString('en-US', {timeZone: 'America/Chicago'});
  const [nowInfo] = [...nowLoc.matchAll(/, (\d+):.*([AP]M)/g)];
  let [_, hour, ampm] = nowInfo;
  hour = Number(hour);
  if (ampm === "AM" && (hour <= 7 || hour === 12)) {
    const i = hour === 12 ? 0 : hour;
    battery = bats.nite[i];
  } else {
    const iadd = ampm === "PM" && hour !== 12 ? 12 : 0;
    const i = Math.floor((hour + iadd - 8) / 2);
    battery = bats.day[i];
  }
</script>

<header class="header">
  <div class="header-inner">
    <a class="logo block-link" href="/" title="CERiNG">
      <Logo/>
      <p class="logo-title">
        {#if titles && titleVisible}
          <span class="logo-title-inner"
            in:fly={{ y: 4, duration: 400 }}
            out:fly={{ y: -4, duration: 400 }}
            on:introend={handleAwait}>
            {titles[curTitle]}
          </span>
        {/if}
      </p>
    </a>
  </div>
  <div class="header-end">
    <span>󱚻&nbsp;</span>
    <span>󰒢&nbsp;</span>
    <span>{battery}&nbsp;</span>
  </div>
  <div class="header-bottom">
    <!--
    <p>microbrowser online | select a theme</p>
    <p>theme</p>
    <select name="" id="">
      <option value="">default</option>
      <option value="">dark</option>
      <option value="">aero</option>
      <option value="">mobility</option>
    </select>
    -->
  </div>
</header>
