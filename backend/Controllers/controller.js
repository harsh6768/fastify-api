const boom=require('boom');

const Todo=require('../Models/TodoSchema');

let addTodo=async (request,reply)=>{
    const { title,body}=request.body;
    const todo=new Todo({title,body});
    //to insert the todo into the mongodb database
    try{
   
       await todo.save();  
       reply.send({status:"200",body:{title,body},message:'Data inserted'});

    }catch(err){
      //for throwing the http error
      throw boom.boomify();
    }
}

let getTodos=async (request,reply)=>{
  
   try{
       const todos=await Todo.find();
       return todos;
   }catch(err){

    throw boom.boomify();

   }
}

let getSingleTodo=async (request,reply)=>{
 
  try{
    const id=request.params.id;
    const todo=Todo.findById(id);
    return todo;
  }catch(err){
    throw boom.boomify();
  }

}
let deleteTodo=async (request,reply)=>{
      
    try{

       //id should the id of stored in database for every todo
      const id=request.params.id;
      //to delete the todo from the database
      const todo= await Todo.findByIdAndDelete(id);
        
      reply.send(todo)
      
    }catch(err){
      throw boom.boomify();
    }
}
let updateTodo=async (request,reply)=>{
     try{
        const id=request.params.id;
        const newTodo=request.body;
        //to update the todo
        const todo=await Todo.findByIdAndUpdate(id,newTodo);
        //existed todo
        reply.send(todo);

     }catch(err){
       throw boom.boomify();
     }
}

module.exports={
    addTodo,
    getTodos,
    getSingleTodo,
    deleteTodo,
    updateTodo
}
