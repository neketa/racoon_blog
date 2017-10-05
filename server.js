const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('.'))

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'index.html'))
})


app.listen(3000, function () {
  console.log('Application started on port 3000!')
})