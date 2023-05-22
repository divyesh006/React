const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom authentication endpoint
server.post('login', (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get('users').value();
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
