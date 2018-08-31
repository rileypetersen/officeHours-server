const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const { UsersRouter, OrganizationsRouter, MeetingsRouter, SessionsRouter, TagsRouter } = require('./routers');
const processErrorMessage = require('./middleware/errors');
require('dotenv').config();

app.use(cors({ exposedHeaders: 'Auth' }));
app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/api/users', UsersRouter);
app.use('/api/organizations', OrganizationsRouter);
app.use('/api/organizations/:oid/sessions', SessionsRouter);
app.use('/api/organizations/:oid/sessions/:sid/meetings', MeetingsRouter);
app.use('/api/organizations/:oid/tags', TagsRouter);

app.use((req, res) => {
  const status = 404;
  const message = `Could not ${req.method} ${req.path}`;
  res.status(status).json({ status, message });
});

app.use((err, req, res, next) => {
  err = processErrorMessage(err);
  if (process.env.NODE_ENV !== 'test') console.error(err)
  res.status(err.status).json(err);
});

app.listen(port, () => console.log(`On port: ${port}`));

module.exports = app;