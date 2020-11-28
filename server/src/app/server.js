const app = require('./app')

app.listen(process.env.HOST||3333,()=>console.log('sever on'))