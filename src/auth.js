const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const registeredUsers = [];

app.post('/auth', (req, res) => {
  const { email, password } = req.body;

  const user = registeredUsers.find(user => user.email === email && user.password === password);

  if (user) {
    res.status(200).json({ success: true, message: 'Authentication successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));