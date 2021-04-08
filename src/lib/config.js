import jwt from 'jsonwebtoken'

export default connString => [connString]
  .map(cs => new URL(cs))
  .map(url => Object.freeze({
    url: svc => `https://${url.host}/${svc}${url.pathname}`,
    token: () => jwt.sign({sub: url.username}, url.password)
  })
  )[0]
