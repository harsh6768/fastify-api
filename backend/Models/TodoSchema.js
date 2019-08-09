const mongoose=require('mongoose');



const todoSchema=new mongoose.Schema({
     
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Todo',todoSchema);

