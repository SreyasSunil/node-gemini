const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { generateResponse, history } = require('./controllers/index.js')

const app = express();

// middleware to parse the body content to JSON
app.use(bodyParser.json())
app.post('/generate', generateResponse)
dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});


// app.get("/generate", (req, res) => {
//     res.send(history)
// })

