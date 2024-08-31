const express = require('express');
const cors=require('cors');
const app = express();

app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.json("hello world");
});

app.post('/getCalls', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(8080, () => {
    console.log('App running on port 8080.');
});
