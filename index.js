const express = require('express');
const connectToMongo = require('./database');
const cors = require('cors');
//require('dotenv').config();
connectToMongo();

const app = express();
const PORT = process.env.PORT || 5000

console.log(process.env);


app.use(cors());

app.use(express.json())

app.get('/', (req, res) =>{
    res.send("Hello World");
})

app.use('/auths', require('./routes/auths'));
app.use('/list', require('./routes/list'))

app.listen(PORT, ()=>{
    console.log(PORT);
})
