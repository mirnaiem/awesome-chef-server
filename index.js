
const express = require('express')
const chefs=require('./chef.json')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chefs',(req,res)=>{
  
  res.send(chefs)
})
app.get('/chefs/:id',(req,res)=>{
  const id=req.params.id;
  const selectedChef=chefs.find(chef=>chef.id===id);
  res.send(selectedChef)
  console.log(id)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})