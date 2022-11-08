const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Database successfull Connected')
}).catch((err) => {
    console.log('Datbase Connection Failed');
})