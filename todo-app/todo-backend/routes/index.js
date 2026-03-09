const express = require('express');
const router = express.Router();
const { get } = require('../redis');

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET statistics */
router.get('/statistics', async (_, res) => {
  const n = await get("added_todos") || 0
  res.send({ added_todos: parseInt(n) })
});

module.exports = router;
