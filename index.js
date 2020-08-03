const express = require('express');
const nav = require('./routes/nav');

const app = express();

app.use(nav);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
