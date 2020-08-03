const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ msg: 'Hello You Guys Haru pani lol' });
});
module.exports = router;
