<script>
  let { uname } = $props();

  const users = {
    "mangoafterdawn": {color: "#ccea4e", link: "https://mangoafterdawn.bsky.social"},
    "sorae": {color: "#8b96e9", link: "https://soraeee.bsky.social"},
  }

  const style = `
    color: color-mix(in oklab, ${users[uname].color} 100%, black 50%);
    background-color: color-mix(in oklab, ${users[uname].color} 100%, white 80%);
    padding: 0px 4px;
    border-radius: 4px;
  `;

</script>

<a class="external" {style} href={users[uname].link} target="_blank" rel="noopener">@{uname}</a>