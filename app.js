const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('<b2>This is the nodejs Application you containerised</b2>s');
});

const PORT = 80;
server.listen(PORT, () => {
  console.log(`<marquue>This is the nodejs Application you containerised</marquee>`);
  console.log(`Server running at http://localhost:${PORT}/`);
});
