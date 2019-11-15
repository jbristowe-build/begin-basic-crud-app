let arc = require('@architect/functions')

exports.handler = async function http(request) {
  let body = arc.http.helpers.bodyParser(request)
  
  if (!body.article) {
    return {
      status: 422,
      body: 'Article must be specified.'
    }
  }
  
  const articleData = body.article
  for (const expectedField of ['title', 'description', 'body']) {
    if (!articleData[expectedField]) {
      return {
        status: 422,
        body: `${expectedField} must be specified.`
      }
    }
  }

  return {
    status: 302,
    location: '/'
  }
}
