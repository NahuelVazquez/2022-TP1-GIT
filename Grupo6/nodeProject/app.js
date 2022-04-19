const express = require('express')
const square  = require('./functions/square')
const app = express()
const port = 3000

app.use(express.json())
app.set("view engine","ejs")
app.get('/', (req, res) => {
  res.render("index",{square: square(3)})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
