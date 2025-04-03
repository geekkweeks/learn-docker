import express from 'express';

import connectToDB from './helper.mjs';

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
});

await connectToDB();

app.listen(3000)
