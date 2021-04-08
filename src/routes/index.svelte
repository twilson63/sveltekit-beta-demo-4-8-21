<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/articles.json')
    if (res.ok) {
      return {
        props: {
          articles: await res.json()
        }
      }
    }

    return { 
      status: res.status, 
      error: new Error('could not load articles') 
    }
  }
</script>
<script>
  export let articles = []
</script>
<main>
  <h1>Blog</h1>
  <a href="/new">New Article</a>
  <h3>Recent Articles</h3>
  {#each articles as article}
    <article>
      <a href="/{article.id}"><h3>{article.title}</h3></a>
    </article>
  {/each}
</main>
