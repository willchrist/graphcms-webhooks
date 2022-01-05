require('dotenv').config();
const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', router);
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to To Do API!"
    });
});

app.post('/', (req, res) => {
    const body = {'content': JSON.stringify(req.body)};

    const response = fetch(process.env.DISCRD_WEBHOOKS, {
        method: 'post',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    });

    res.status(200).json(req.body);
});

app.listen(port, () => {
    console.log(`Server started at ${Date()}!`);
    console.log(`Listening on port ${port}!`);
})

module.exports = app;
