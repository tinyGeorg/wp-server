const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = process.env.PORT | 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send("Hey"));

app.listen(port, () => console.log(`Server listen on port: ${port}`))