import http from 'node:http';
import path from 'path';
import fs from 'fs';
import os from 'os';

const STATUS_CODE = {
  OK: 200
}

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(STATUS_CODE.OK, {
    'Content-Type': 'text/html'
  });
  if (req.url === '/') {
    console.log(`requested by hostname: ${os.hostname}`);
  }
  fs.createReadStream(path.resolve('static', 'index.html')).pipe(res)
})

server.listen(PORT, ()=> console.log(`listening on PORT ${PORT}`));