const express = require('express')

// express app
const app = express()

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// listen for requests
app.listen(4000, () => {
    console.log('listening on port 4000');
})