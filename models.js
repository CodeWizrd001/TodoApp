var mongoose = require('mongoose') , db;

// Database Setup
if(!db)
{
    mongoose.connect('mongodb://localhost/TodoApp',{useNewUrlParser:true,useUnifiedTopology:true});
    db = mongoose.connection ;
}

// Schemas 
const UserSchema = {
    name : String , 
    password : String ,
    token : String ,
}

const TaskSchema = {
    user : String ,
    name : String ,
    description : String ,
    Time : String ,
}

// Models 
const User = mongoose.model('Users',UserSchema) ;
const Task = mongoose.model('Tasks',TaskSchema) ;

module.exports = {
    'db' : db ,
    'User' : User ,
    'Task' : Task ,
} ;