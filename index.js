const express = require('express')
const app = express()
const port = 3000
const db = require("./scr/api/db/connection")
const imageRouter = require("./scr/api/image/imageRouter")
app.use(express.static('./public'));
app.use('/', imageRouter);
app.listen(port, () => console.log(`my profiler app listening on port ${port}!`)) 
