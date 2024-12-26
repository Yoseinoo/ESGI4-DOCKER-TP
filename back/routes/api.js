const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello from API Route!' });
});

router.post('/adduser', async (req, res) => {
  const name = 'test';
  const email = 'test@test.fr';
  
  try {
    const [result] = await db.execute('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    res.status(201).json({ id: result.insertId, name, email });
  } catch (err) {
    console.error('Error inserting user:', err);
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Failed to insert user' });
  }
})

module.exports = router;