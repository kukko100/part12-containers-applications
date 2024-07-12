const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis'); // Import getAsync

router.get('/statistics', async (req, res) => {
  try {
    const addedTodos = await getAsync('added_todos') || 0;
    res.json({ added_todos: parseInt(addedTodos) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve statistics' });
  }
});

module.exports = router;
