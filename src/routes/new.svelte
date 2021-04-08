<script>
  import { goto } from '$app/navigation'
  let article = {}

  async function doSubmit() {
    const res = await fetch('/articles.json', { 
      method: 'POST', 
      headers: {'content-type': 'application/json'}, 
      body: JSON.stringify(article) 
    }).then(res => res.json())

    goto('/')
  }
</script>
<main>
  <h1>New Article</h1>
  <form on:submit|preventDefault={doSubmit}>
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" bind:value={article.title} />
    </div>
    <div>
      <button type="submit">Create</button>
      <a href="/">Cancel</a>
    </div>
  </form>
</main>
<style>
  div {
    margin: 32px 0px;
  }
</style>
