import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello jk!');
  res.end();
}).listen(process.env.PORT);
