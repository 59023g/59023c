// server/index (entry point)

import http from 'http'
import nconf from 'nconf'

const app = require('./app');
let port = 3001
let server = http.createServer(app)
server.listen(port)

console.log('express server listening on ' + port )
