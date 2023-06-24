import app from './app';

const port = process.env.APP_PORT || 3033;
app.listen(port);
