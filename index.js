const { createServer } = require('node:http');
const hostname = '0.0.0.0';
const port = 80;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');

  let arreglo = [
    {
      nombre:"Juan",
      apellido:"Perez"
    },
    {
      nombre:"Mario",
      apellido:"Bross"
    },
    {
      nombre: "Juan",
      apellido: "Flores"
    }
  ]

  res.write(JSON.stringify(arreglo));

  res.end('');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});