<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
	import GreebleLine from 'components/greebles/Line.svelte';
	import GreebleExs from 'components/greebles/Exs.svelte';
	import GreebleText from 'components/greebles/Text.svelte';
	import GreebleBlock from 'components/greebles/Block.svelte';
	import Action from 'components/Action.svelte';
</script>

<svelte:head>
  <Meta title="Misfits in the Prairie" desc='find your way home in an endless prairie'/>
</svelte:head>

<div class="misfits">
	<h1 class="h1-img">
		<img src="/img/headers/misfits.png" alt="Misfits in the Prairie">
	</h1>

	<div class="double spacer">
		<div class="double-left grow-3">
			<iframe class="itg-embed" title="Misfits in the Prairie" src="https://www.youtube.com/embed/yV0XQziHyy4?modestbranding=0&rel=0" frameborder="0" scrolling="no" allowfullscreen></iframe>
		</div>
		<div class="double-right">
			<div class="actions-side">
				<Action link="https://github.com/cerisyl/mod-releases/raw/main/packs/Misfits%20in%20the%20Prairie.zip" text="download" icon=""/>
				<Action link="https://www.dropbox.com/scl/fi/fr07tx5ukekfzuvzp3l52/Misfits-in-the-Prairie.zip?rlkey=iedxx67y3rb3q36ftau62pl5r&st=gnezj2im&dl=1" text="mirror 1" icon=""/>
				<Action link="https://drive.google.com/file/d/12TklBQUOF30aQY6HnujQZS3j1PyU-xDJ/view?usp=sharing" text="mirror 2" icon=""/>
			</div>
			<p class="misfits-text right spacer0">premiered <b>24 Nov 2019</b></p>
			<p class="misfits-text right spacer0">released <b>11 Jan 2020</b></p>
			<p class="right"><span class="comment">requires <a class="external" href="https://www.noti.tg/" target="_blank" rel="noopener" >NotITG v3.1+</a></span></p>

		</div>
	</div>

	<h2>find your way home</h2>

	<img class="upsell-ne"src="/img/itg/upsell/misfits-1.png" alt="Talis points to a beam of light in the distance. she says: We should make our way over there if we want to find some answers."/>

	<p class="misfits-section">you wake up next to an angel named <b>Talis</b>, cushioned by a bed of flowers and with no recollection of how either of you got there. the prairie surrounding you stretches out for what seems like forever, and there are no signs civilization anywhere. you notice a tall beam of light reaching into the morning sky, picturesquely nestled between rolling hills far in the distance. a beacon of hope, perhaps a way out of this place. </p>

	<img class="upsell-sw" src="/img/itg/upsell/misfits-2.png" alt="an in-game screenshot of the first stage of the tournament, Fly far bounce. Talis fights strong winds as she flies from the right to the left of the screen. the playfields skew as if they are being blown in the wind, too."/>

	<p class="misfits-section"> Talis explains she was separated from her partner, and that it would be best to work together in order to find help. understandably, Talis is worried for her partner's safety...something bad might happen if she isn't by his side. she jumps at the opportunity to find answers closer to the beam of light, and you find yourself running through the tallgrass fields of this world in search of an exit.</p>

	<p class="misfits-section">this prairie is not without its secrets, and it doesn't take long to find others who have accidentally found themselves among the fields. some seem to claim to know how to leave this place, while others are just as eager to find their way out. it's everyone for themselves, and no one is so kind to trust you like Talis does.</p>

	<p class="misfits-text center"><b>join Talis and your growing band of misfits to find a way back home before sunset!</b></p>

	<img class="upsell-se" src="/img/itg/upsell/misfits-3.png" alt="Talis says: Will anyone here volunteer to vanquish that ghost?"/>

	<h2>cast & credits</h2>
	<div class="credits">
		<h3>project lead & writing</h3>
		<div class="credits-section">
			<p>CERiNG</p>
		</div>

		<h3>programming & steps</h3>
		<div class="credits-section">
      <p><a class="external" href="https://soraeee.bsky.social" target="_blank" rel="noopener">Andrew “sorae” V.</a></p>
      <p><a class="external" href="https://drazilspirits.nekoweb.org" target="_blank" rel="noopener">drazilspirits</a></p>
      <p><a class="external" href="https://youtube.com/kaypooma" target="_blank" rel="noopener">kaypooma</a></p>
      <p>CERiNG</p>
      <p><a class="external" href="https://bsky.app/profile/tetaes.tacs.cafe" target="_blank" rel="noopener">Techathat “Tetaes” Sakulsak</a></p>
		</div>

		<h3>art lead & storyboard</h3>
		<div class="credits-section">
      <p><a class="external" href="https://x.com/starrymarii" target="_blank" rel="noopener">starrymarii</a></p>
		</div>

		<h3>additional art</h3>
		<div class="credits-section">
      <p>Mars</p>
      <p><a class="external" href="https://taronuke.net" target="_blank" rel="noopener">Alan “TaroNuke” James</a></p>
      <p>Techathat “Tetaes” Sakulsak</p>
      <p>drazilspirits</p>
      <p>electricnil</p>
		</div>

		<h3>voice talent</h3>
		<div class="credits-section">
			<p><span class="credits-spacer"><a class="external" href="https://abicadabriva.bsky.social" target="_blank" rel="noopener">Abigail Adair</a></span>Talis</p>
			<p><span class="credits-spacer">drazilspirits</span>DJ Sp3ct3r</p>
			<p><span class="credits-spacer">Techathat “Tetaes” Sakulsak</span>Tachet Ilkiv</p>
			<p><span class="credits-spacer">Mars</span>Lin Liozhi</p>
			<p><span class="credits-spacer">CERiNG</span>Aster</p>
		</div>

		<h3>special thanks</h3>
		<div class="credits-section">
			<p><span class="credits-spacer"><a class="external" href="https://https://www.youtube.com/cosmiclaer" target="_blank" rel="noopener">Nil “CosmicLAER” Dowdle</a></span>inspiration, Talis design</p>
			<p><span class="credits-spacer">TaroNuke & <a class="external" href="https://www.youtube.com/halcyoniix" target="_blank" rel="noopener">halcyoniix</a></span>theme debugging</p>
			<p><span class="credits-spacer"><a class="external" href="https://kuut.xyz" target="_blank" rel="noopener">Kuut</a> & <a class="external" href="https://puuro.bsky.social" target="_blank" rel="noopener">Puuro</a></span>3D modeling work</p>
		</div>
	</div>


</div>