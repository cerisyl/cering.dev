<script>
  let { images, index, hidden=true } = $props();

  const count = images.length
  const onKeyDown = e => {
    switch (e.key) {
      case "ArrowLeft":   index = index > 0 ? index-1 : count-1 ; break;
      case "ArrowRight":  index = index < count-1 ? index+1 : 0 ; break;
    };
  };

</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

{#key index}
  <div class="modal" class:modal-hidden={hidden}>
    <p class="modal-index">viewing <b>{index + 1} of {count}</b></p>
    <img class="modal-image" src={images[index].source} alt={images[index].caption} loading="lazy">
    <p class="modal-caption">{@html images[index].caption}</p>
  </div>
{/key}