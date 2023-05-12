
const express = require('express')
const chef=require('./chef.json')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chefs',(req,res)=>{
  
  res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})