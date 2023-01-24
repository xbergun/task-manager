const express = require('express');
const app = express();
const routers = require('./routers/index');

const PORT = process.env.PORT || 5000;

app.use('/api', routers)

app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT + '');
});
