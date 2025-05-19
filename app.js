const express = require('express');
const app = express();
const port = 3000;

app.get('/travel', (req, res) => {
    res.send('Моё любимое место для путешествий — Чебоксары.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
