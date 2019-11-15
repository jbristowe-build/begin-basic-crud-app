@app
shiny-qwf

@static

@http
get /todos
post /todos
post /todos/delete
get /api/articles
post /api/articles

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
