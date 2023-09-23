const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    // taskname:{
    //     type:String,
    //     required:true
    // },
    createdAt:{
        type:Date,
        default:Date.now
    },
    remainderAt:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('taskstore',PostSchema);