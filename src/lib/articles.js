import config from './config'
import fetch from 'node-fetch'

const cs = import.meta.env.VITE_HYPER
const c = config(cs)

export default {
  list() {
    return fetch(c.url('data') + '/_query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${c.token()}`
      },
      body: JSON.stringify({ selector: { type: 'article' }})
    }).then(res => res.json())
  },
  post(body) {
    return fetch(c.url('data'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${c.token()}`
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  },
  get(id) {
    return fetch(`${c.url('data')}/${id}`, {
      headers: {
        authorization: `Bearer ${c.token()}`
      }
    }).then(res => res.json())
  }
}
