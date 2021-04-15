var mongoose = require('mongoose') , db;

// Database Setup
if(!db)
{
    mongoose.connect('mongodb://localhost/TodoApp',{useNewUrlParser:true,useUnifiedTopology:true});
    db = mongoose.connection ;
}

// Schemas 
const UserSchema = {
    name : {type: String , required:true} , 
    password : {type: String , required:true} ,
    token : {type: String } ,
}

const TaskSchema = {
    id : {type: Number , required:true} ,
    user : {type: String , required:true} ,
    name : {type : String , required:true} ,
    description : {type : String , required:true} ,
    Time : {type:String} ,
}

// Models 
const User = mongoose.model('Users',UserSchema) ;
const Task = mongoose.model('Tasks',TaskSchema) ;

module.exports = {
    'db' : db ,
    'User' : User ,
    'Task' : Task ,
} ;