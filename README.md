# Introduction

Sample app for demonstrating issue with dd-js package for traces not being sent when using an API proxy

## Run It

1. Run a proxy locally such as Squid (ubuntu: https://ubuntu.com/server/docs/proxy-servers-squid, mac: https://squidman.net/squidman/)
2. Configure config/default.json with proxy URL and port
3. npm install
4. npm start
5. Visit http://localhost:3000/ which will send a web request with the proxy
6. Visit http://localhost:3000/noProxy which will send a web request without the proxy
7. Note that only /noProxy gets traced in Datadog