const express = require('express')
const app = express()
const port = 5000
const cors = require("cors")
const mongoDB = require("./db")
mongoDB();

app.use(cors({
  origin: "http://localhost:3000"
 })
)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth',require("./Routes/CreateUser"));
app.use('/api/auth',require("./Routes/DisplayData"));
app.use('/api/auth',require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`)
})