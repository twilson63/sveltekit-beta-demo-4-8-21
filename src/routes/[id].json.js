import articles from '$lib/articles'

export async function get({ params }) {
  const article = await articles.get(params.id)

  console.log('article', article)

  return {
    body: JSON.stringify(article)
  }
}
