const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_HOST||"mongodb://localhost:27017/upload",{
    useNewUrlParser:true
}) 
.then(() => console.log(`connecting `))
.catch(err => console.log(`funcionou,${err}`)) 
mongoose.Promise = global.Promise

module.exports=mongoose;
