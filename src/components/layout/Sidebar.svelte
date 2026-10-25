<script lang="js">
  import SidebarSection from "./SidebarSection.svelte";
</script>

<nav class="nav">

  <div class="nav-main">
    <SidebarSection title="itg content" icon="󰊖" links={[
      {name: "ceristreams 2", href: "/itg/streams2", extra: "(new!)"},
      {name: "stamina",       href: "/itg/stamina"},
      {name: "mods",          href: "/itg/mods"},
      {name: "tech",          href: "/itg/tech"},
      {name: "mixes",         href: "/itg/mixes"},
    ]}/>

    <SidebarSection title="hobbies" icon="" links={[
      {name: "graphics",  href: "/graphics"},
      {name: "webdev", href: "/webdev"},
      {name: "music works",     href: "https://cering.bandcamp.com/"},
    ]}/>

    <!--
    <SidebarSection title="club::ceri" icon="" links={}/>

    <SidebarSection title="work" icon="󰨭" links={[
      {name: "commissions", href: "/commissions", extra: "(open!)"},
      {name: "resume",      href: "/resume"},
    ]}/>

    <SidebarSection title="blogs" icon="" links={[
      {name: "blog",      href: "/blog", extra: "(coming soon!)"},
      {name: "microblog", href: "/microblog"}

    <SidebarSection title="miscellany" icon="" links={[
      //{name: "playlists", href: "/playlists"},
      //{name: "tools",     href: "/tools"},
      {name: "about",     href: "/about"},
      {name: "cache",     href: "/cache"},
      {name: "support",   href: "/support"},
      {name: "site map",  href: "/site-map"},
    ]}/>
    -->
  </div>
  <div class="nav-bottom">
    <p class="nav-header">webrings</p>
    <div class="flex-col gaps-2">
      <div class="nav-webring">
        <a class="nav-webring-l block-link" href="https://rems-works.neocities.org/" target="_blank" rel="noopener">{"󰁎"}</a>
        <span class="nav-webring-c block-link">itg</span>
        <a class="nav-webring-r block-link" href="https://rems-works.neocities.org/" target="_blank" rel="noopener">{"󰁕"}</a>
      </div>
    </div>
  </div>

</nav>