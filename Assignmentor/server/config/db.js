const mongoose = require('mongoose')
const connectDB = async ()=> {

    try{
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect(process.env.MONGODB_URI || config.connectionString);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch(error){
        console.log(error);
    }
    }
module.exports = connectDB;
// const {mongoClient} = require('mongodb')
// module.exports = {
//     connectToDb:(cb)=>{
//         mongoClient.connect('mongodb://localhost:27017/cluster1231')
//         .then((client)=>{
//             dbConnection = client.db()
//             return cb()
//         }) 
//         .catch(err =>{
//             console.log(err)
//             return cb(err)
//         })
//     },
//     getDb:()=> dbConnection
// }