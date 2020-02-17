const express = require('express');
const app = express();
const port = 3000;
const host = '0.0.0.0';

app.get('/', (req, res) => res.send('Hello World! - Siddhant'))

app.listen(port, host, () => console.log(`Example app listening on port ${port}!`))