const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const { usersRoutes, organizationsRoutes, meetingsRoutes, sessionsRoutes, tagsRoutes } = require('./routes');
const processErrorMessage = require('./middleware/errors');
require('dotenv').config();

app.use(cors({ exposedHeaders: 'Auth' }));
app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/api/users', usersRoutes);
app.use('/api/organizations', organizationsRoutes);
app.use('/api/organizations/:oid/sessions', sessionsRoutes);
app.use('/api/organizations/:oid/sessions/:sid/meetings', meetingsRoutes);
app.use('/api/organizations/:oid/tags', tagsRoutes);

app.use((req, res) => {
  const status = 404;
  const message = `Could not ${req.method} ${req.path}`;
  res.status(status).json({ status, message });
});

app.use((err, req, res, next) => {
  err = processErrorMessage(err)
  const status = err.status || 500;
  const message = err.message || 'Internal Error.';
  res.status(status).json({ message })
});

app.listen(port, () => console.log(`On port: ${port}`));

module.exports = app