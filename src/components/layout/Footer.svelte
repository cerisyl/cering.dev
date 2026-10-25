<script lang="js">
	import Discord from 'src/img/icons/discord.svelte';
	import Bluesky from 'src/img/icons/bluesky.svelte';
	import Youtube from 'src/img/icons/youtube.svelte';
  import Github from 'src/img/icons/github.svelte';
  import Linkedin from 'src/img/icons/linkedin.svelte';
  import Bandcamp from 'src/img/icons/bandcamp.svelte';
  import Soundcloud from 'src/img/icons/soundcloud.svelte';
  import Twitch from 'src/img/icons/twitch.svelte';
  import Twitter from 'src/img/icons/twitter.svelte';
  import Email from 'src/img/icons/mail.svelte';

  const socials = [
    {name: "Discord",    url: "discord://discord.com/users/210385938918932480", element: Discord},
    {name: "Bluesky",    url: "https://bsky.app/profile/cering.dev",           element: Bluesky},
    {name: "YouTube",    url: "https://www.youtube.com/cering",                 element: Youtube},
    {name: "Twitch",     url: "https://twitch.tv/cerisyl",                      element: Twitch},
    {name: "Bandcamp",   url: "https://cering.bandcamp.com/",                   element: Bandcamp},
    {name: "Github",     url: "https://github.com/cerisyl",                     element: Github},
    {name: "LinkedIn",   url: "https://www.linkedin.com/in/cering/",            element: Linkedin},
    //{name: "Soundcloud", url: "https://soundcloud.com/cerisyl",                 element: Soundcloud},
    //{name: "Twitter",    url: "https://twitter.com/asteradd",                   element: Twitter},
    {name: "Email",      url: "mailto:hello@cering.dev",                        element: Email},
  ];
</script>


<footer class="footer">
  <div class="socials">
    {#each socials as social}
      <a class="socials-link block-link" href={social.url} target="_blank" rel="noopener" title={social.name} aria-label={social.name}>
        <social.element/>
      </a>
    {/each}
  </div>
  <div class="footer-inner">
    <!-- <img class="footer-8831" src="/img/88x31/nixos.gif" alt="Powered by NixOS"> -->
    <p class="footer-text">
      <b>© {new Date().getFullYear()} cering.dev</b>
      <span class="footer-shouts">all rights reserved</span>
    </p>
  </div>
</footer>