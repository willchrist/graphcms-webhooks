const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const http = require('http');

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

    const response = fetch('https://discord.com/api/webhooks/912190240448466956/6c00ssVfVdQPZWBpgOnjeHEeH22C62DkcUTf-iCFtfImD7aEzhgkMcH5Tw_DGc1MMT5N', {
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
setInterval(function() {
    http.get('https://graphcms-webhooks-discord.herokuapp.com/')
}, 900000);

module.exports = app;
