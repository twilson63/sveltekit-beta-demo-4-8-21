<script context="module">

  export async function load({page}) {
    return {
      props: {
        id: page.params.id
      }
    }
  }
</script>
<script>
  export let id
</script>
<main>
  <h1>Article {id}</h1>
</main>
