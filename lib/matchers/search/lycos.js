const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('lycos') !== -1) {
    const description = { type: 'search', engine: 'lycos' }
    const query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  }
  return false
}
