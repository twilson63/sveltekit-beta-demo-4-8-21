import articles from '$lib/articles'

export async function get() {
  const res = await articles.list()
    
  return {
    body: res.docs
  }
}

export async function post({body}) {
  const res = await articles.post({...body, type: 'article'})

  return {
    body: res
  }
}
