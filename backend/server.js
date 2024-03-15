// require ('dotenv').config()
import express from 'express';
const app = express() 

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port  = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})