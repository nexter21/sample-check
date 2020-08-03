const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ msg: 'Hello You Guys in 2nd hai guys' });
});
module.exports = router;
