const  controllers=require('../Controllers/controller')

const routes=[
    {
        method: 'POST',
        url: '/addTodo',
        handler:controllers.addTodo
    },
    {
        method: 'GET',
        url: '/getTodos',
        handler:controllers.getTodos
    },
    {
        method: 'GET',
        url: '/getTodo/:id',
        handler:controllers.getSingleTodo
    },
    {
        method: 'DELETE',
        url: '/deleteTodo/:id',
        handler:controllers.deleteTodo
    },
    {
        method: 'PUT',
        url: '/updateTodo/:id',
        handler:controllers.updateTodo
    }
]

module.exports=routes;