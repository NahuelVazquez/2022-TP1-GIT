const express = require('express')
const square  = require('./function')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  let n = 3
  const resp = `El cuadrado de ${n} es: ` + JSON.stringify(square(n))
  res.send(resp)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
