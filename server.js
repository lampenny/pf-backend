const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:${PORT}`))