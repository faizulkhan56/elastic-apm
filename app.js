var apm = require('elastic-apm-node').start({
  serviceName: 'my-nodejs-app', // Customize with your app name
  serverUrl: 'http://103.191.179.79:8200', // APM server URL
  secretToken: 'NJ07Ksmqd1iCFyOlFWhGnhuP9GHg8fSj', // APM Secret Token
  environment: 'development',
  captureBody: 'all'
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Elastic APM!');
});

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

