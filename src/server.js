require('./db');

const app = require('./app');

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.listen({ port: PORT, host: HOST }, () => {
  console.info(`Server started on http://${HOST}:${PORT}`);
});
