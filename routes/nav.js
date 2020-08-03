const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ msg: 'Hello You Guys in 2nd hai guys asdsa' });
});

router.get('/ola', (req, res) => {
  res.send({ msg: 'Hello You Guys in 2nd hai guys asdsa' });
});
module.exports = router;
