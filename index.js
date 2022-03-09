const config = require('config');
const tracer = require("dd-trace").init({
  service: 'test-datadog-with-proxy'
})
const express = require('express')
const axios = require("axios");
const { httpsOverHttp } = require('tunnel')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  let tunnel = httpsOverHttp({
    proxy: {
      host: config.proxyHost,
      port: config.proxyPort
    }
  });
  var requestConfig = {
    method: 'GET',
    url: 'https://www.google.com',
    httpsAgent: tunnel
  };
  await axios.request(requestConfig);
  res.send('Finished request with proxy in between')
})

app.get('/noProxy', async (req, res) => {
  var requestConfig = {
    method: 'GET',
    url: 'https://www.google.com'
  };
  await axios.request(requestConfig);
  res.send('Finished request WITHOUT proxy')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})