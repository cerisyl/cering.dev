<script lang="js">
  import Header from 'components/layout/Header.svelte';
  import Sidebar from 'components/layout/Sidebar.svelte';
  import Footer from 'components/layout/Footer.svelte';

  let { children } = $props();
</script>

<div class="overlays" aria-hidden="true">
  <img src="/img/overlays/texture.webp" alt="">
</div>

<Header/>
<main class="main">
  <Sidebar/>
  <div class="main-inner">
    <div class="content">
      <p class="content-outer" aria-hidden="true">
        <span>⌜</span>
        <span>⌝</span>
      </p>
      <div class="content-inner">
        {@render children()}
      </div>
      <p class="content-outer" aria-hidden="true">
        <span>⌞</span>
        <span>⌟</span>
      </p>
    </div>
    <Footer/>
  </div>
</main>