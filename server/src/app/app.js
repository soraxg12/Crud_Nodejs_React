const espress = require('express')
const app = espress()
const cors =  require('cors')
const router = require('./routes')

app.use(cors())
app.use(espress.json())
app.use("/",router)

module.exports = app