<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
	import GreebleBlock from 'components/greebles/Block.svelte';
	import Website from 'components/Website.svelte';
</script>

<svelte:head>
  <Meta title="webdev" desc='web development efforts and projects led by CERiNG'/>
</svelte:head>

<GreebleBlock text="webdev"/>

<h1 class="h1-img">
  <img src="/img/headers/webdev.png" alt="webdev">
</h1>

<Website
  name="Raritan Public Library"
  langs={["js", "stylus", "pug", "bash", "apache"]}
  live="https://rpl.cering.dev"
  source="https://github.com/raritanlibrary/www"
  image={{src: "/img/webdev/rpl.png", alt: "The homepage of Raritan Public Library"}}>
    <p>in addition to my duties as <a href="resume">IT Specialist</a>, i was tasked with redesigning this library's website following a 12-year period without a significant update. the old website, a Web 1.0-era design running off of fragments of poorly-maintained HTML and CSS, was completely overhauled using a frontend stack of <b>Pug</b>, <b>Stylus</b>, and <b>vanilla JavaScript</b>. i opted to use vanilla JS rather than React or Svelte since the Library's userbase viewed the site on older, slower devices (as far back as Windows XP!).</p>
    <p>using Google's open-source <b>Lighthouse</b> toolkit, i continually audited the website to ensure new content was being loaded without issue. i also created a suite of <b>Bash</b> scripts to push updates to the library's webserver, pre-generate less frequently updated dynamic content using an API, and tabulate monthly statistics based on <b>Apache</b> access logs.</p>
</Website>

<Website
  name="Cardigan"
  langs={["react", "ts", "sass", "vite", "py"]}
  live="https://soraeee.github.io/cardigan/"
  source="https://github.com/soraeee/cardigan"
  image={{src: "/img/webdev/cardigan.png", alt: "The Cardigan app"}}>
    <p><b>Cardigan</b> is a collaborative volunteer project built for use in <i>ITGMania</i> tournaments at the <a class="link external" href="https://illinois.edu/" target="_blank" rel="noopener">University of Illinois Urbana-Champaign</a>. the app uses a card draw system written in <b>React</b> and <b>TypeScript</b>, and has been used to run tournaments with <b>over 100 participants since 2023</b>. my specific contributions include UI and UX design and functionality, styling using Sass, and full mobile support.</p>
</Website>

<Website
  name="WaffleKani"
  langs={["svelte", "ts", "stylus", "vite", "nodejs"]}
  image={{src: "/img/webdev/wk.png", alt: "The WaffleKani app"}}>
    <p><b>WaffleKani</b> is an all-in-one re-tooling of <a class="link external" href="https://www.wanikani.com/" target="_blank" rel="noopener">WaniKani</a> and <a class="link external" href="https://bunpro.jp/" target="_blank" rel="noopener">Bunpro</a>, used to teach and strengthen knowledge of the Japanese language. using the free-to-access datasets from both services as well as additional language-learning sources, the app utilizes <b>SvelteKit</b> for a fast-loading, easy-to-navigate experience for the end user. the app also has a dashboard to access all of WaffleKani's features, similar in style to WaniKani's.</p>
    <p><span class="comment">WaffleKani is a privately maintained project. Please <a href="mailto:hello@cering.dev">contact me</a> to request a copy of source.</span></p>
</Website>