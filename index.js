const express       = require('express');
const app           = express();
const shmoogleRoute = require('./ShmoogleRoute/shmoogle.router.js');
const port          = 3000;

//   cors            = require('cors');

app.use('/shmoogle', shmoogleRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})