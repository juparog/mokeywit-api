const { Router } = require('express');

const router = new Router();

router.get('/api', (req, res) => {
  const data = {
    name: 'MonkeyWit',
    website: 'monkeywit.com',
    path: req.originalUrl,
  };
  res.json(data);
});

module.exports = router;
