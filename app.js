const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Homepage')
});

app.get('/about', (req, res) => {
    res.status(200).send('About Us');
});

app.use((req, res) => {
    res.status(404).send('404 Not Found')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
