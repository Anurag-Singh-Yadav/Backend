const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
// middle ware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT || 7000;

require('./config/database').dbConnect();

// app.use('/interview-express' , )

app.listen(PORT,()=>{
    console.log('listening on port',PORT);
})


app.get('/',(req, res)=>{
    res.send('<h1>InterviewExpress</h1>');
})



