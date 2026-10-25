<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
	import GreebleLine from 'components/greebles/Line.svelte';
	import GreebleExs from 'components/greebles/Exs.svelte';
	import GreebleText from 'components/greebles/Text.svelte';
	import GreebleBlock from 'components/greebles/Block.svelte';
	import Action from 'components/Action.svelte';
</script>

<svelte:head>
  <Meta title="njsrt" desc='step into the future, a tournament unlike anything else'/>
</svelte:head>

<div class="njsrt">
	<h1 class="h1-img">
		<img src="/img/headers/njsrt.png" alt="njsrt">
	</h1>

	<div class="double spacer">
		<div class="double-left grow-3">
			<iframe class="itg-embed" title="NJSRT1 - Ghost in the Machine" src="https://www.youtube.com/embed/RA-u4K1xUgw?modestbranding=0&rel=0" frameborder="0" scrolling="no" allowfullscreen></iframe>
		</div>
		<div class="double-right">
			<div class="actions-side">
				<Action link="https://github.com/cerisyl/mod-releases/raw/main/packs/NJSRT1.zip" text="download" icon=""/>
				<Action link="https://www.dropbox.com/scl/fi/vhsix5scht8e8udzsayfj/NJSRT1.zip?rlkey=3enxnwbaprrw6iqac85cacyvn&st=7vkkoadg&dl=1" text="mirror 1" icon=""/>
				<Action link="https://drive.google.com/file/d/1-KFO0FleD637SAwZchfdYoWVl-Se_1TH/view?usp=sharing" text="mirror 2" icon=""/>
			</div>
			<p class="njsrt-text right spacer0">premiered <b>01 Dec 2018</b></p>
			<p class="njsrt-text right spacer0">released <b>25 Dec 2018</b></p>
			<p class="right"><span class="comment">requires <a class="external" href="https://www.noti.tg/" target="_blank" rel="noopener">NotITG v3.1+</a></span></p>
		</div>
	</div>

	<h2>step into the future</h2>

	<img class="upsell-ne" src="/img/itg/upsell/nj1-1.png" alt="Melvin, Kaden, Phoebe, and Val walk down a hallway. Melvin says: Umm, you're Phoebe, right? President of the Rhythm Games Club?"/>

	<p class="njsrt-section">in December 2018, in the basement of a college in Newark, New Jersey, contestants prepare for a first-of-its-kind ITG mods tournament. everything seems to be well and good, until the game boots into something completely different. a robot named <b>Fives</b> asks the participants to “synchronize” with the seemingly unassuming arcade cabinet she calls a “Secure Remote Terminal”. after completing a few tests, you're suddenly whisked into the same place in the year 2027.</p>

	<img class="upsell-nw" src="/img/itg/upsell/nj1-2.png" alt="an in-game screenshot of the second stage of the tournament, Yggdrasil Leaf. Val floats in the center of the screen, while arrows accompanied by orange beams scroll upwards."/>

	<p class="njsrt-section">you're quickly introduced to <b>Val</b>, the event organizer for a similar ITG tournament that happens to be running at the same time. a spunky freshman with a knack for fighting, Val has taken it upon herself to derail her own tournament to practice her hand-to-hand combat skills with the participants. you also meet Val's friends: <b>Melvin</b>, an anxious computer science student, and <b>Kaden</b>, who acts like he's still a high school senior.</p>

	<img class="upsell-se" src="/img/itg/upsell/nj1-4.png" alt="using flashlights in the dark, Melvin clings to Kaden, while Phoebe smugly zones out. Kaden says: Ugh, whatever. Melvin, let's go."/>

	<p class="njsrt-section">later, you meet the club president, <b>Phoebe</b>, a lazy goth who has tasked Val to run the tournament while she reaps the benefits of leadership. understandably, she's upset with Val trying to start a fight club, but she also wants to get to the bottom of how all of these contestants showed up. you find yourself traversing the basement halls of the university's Wellness and Events Center, only to stumble upon a strange elevator that seems to parallel rumors of an old campus legend.</p>

	<p class="njsrt-text center">where does this elevator go? why does Val insist on delaying her tournament to practice fighting you? how are college freshman able to cast spells? who is Fives? more importantly, <b><i>how did you get here?</i></b></p>

	<p class="greeble-njsrt" aria-hidden="true" tabindex="-1">◆◆◆◆◆◆◆◆◆</p>

	<img class="upsell-ne" src="/img/itg/upsell/nj1-3.png" alt="an in-game screenshot of the third stage of the tournament, Railgun Roulette. Kaden floats at the bottom-center of the screen, casting a spell card while a ring of colorful arrows surrounds him. the spell card reads: Elementalism: Cloud to Ground."/>

	<div class="njsrt-char"></div>

	<h2>cast + credits</h2>
	<div class="credits">
		<h3>programming + steps</h3>
		<div class="credits-section">
			<p>CERiNG</p>
		</div>

		<h3>writing</h3>
		<div class="credits-section">
			<p>CERiNG</p>
			<p><a class="external" href="https://conro.org" target="_blank" rel="noopener">Conro Norock</a></p>
		</div>

		<h3>art</h3>
		<div class="credits-section">
			<p><a class="external" href="https://mementomari.art" target="_blank" rel="noopener">Marisol Segovia</a></p>
			<p><a class="external" href="https://taronuke.net" target="_blank" rel="noopener">Alan “TaroNuke” James</a></p>
		</div>

		<h3>voice talent</h3>
		<div class="credits-section">
			<p><span class="credits-spacer"><a class="external" href="https://www.shannonhobby.com" target="_blank" rel="noopener">Shannon Hobby</a></span>Valorie Therton, Fives</p>
			<p><span class="credits-spacer"><a class="external" href="https://www.darcymaguirevoiceover.com/" target="_blank" rel="noopener">Darcy Maguire-Wheelahan</a></span>Melvin Costell</p>
			<p><span class="credits-spacer">Conro Norock</span>Kaden Hapke</p>
			<p><span class="credits-spacer">Marisol Segovia</span>Phoebe Ando-Davis</p>
			<p><span class="credits-spacer"><a class="external" href="https://taschrittervo.carrd.co/" target="_blank" rel="noopener">Tasch Ritter</a></span>Neazra</p>
		</div>

		<h3>special thanks</h3>
		<div class="credits-section">
			<p><span class="credits-spacer">Alan “TaroNuke” James</span>testing, SRT logistics, inspiration, Stage 1 help</p>
			<p><span class="credits-spacer">Conro Norock</span>worldbuilding, Fives design</p>
			<p><span class="credits-spacer">Marisol Segovia</span>cutscene art, voicework, emotional support</p>
		</div>
	</div>

</div>