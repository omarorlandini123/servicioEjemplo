const { createServer } = require('node:http');
const hostname = '0.0.0.0';
const port = 80;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');

  let arreglo = [[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[0, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1]]

  res.write(JSON.stringify(arreglo));

  res.end('');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});