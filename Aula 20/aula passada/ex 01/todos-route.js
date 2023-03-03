
let todos = [
  {id:23, title: "Nubank, PicPay", description: "Pagar faturas"}, 
  {id:20, title: "Sexta feira", description: "Ajeitar sobrancelha, unhas"},
];

let currentID=1;

for (let i=0; i<todos.length; i++){
    if(todos[i].id > currentID){
        currentID=todos[i].id;
    }
}

function addID(task){
  currentID=currentID+1;
  task.id=currentID;
}

function addTimestamp(task){
  task.createdAt = +new Date();
}

function addTodo(request, response){
  response.statusCode= 201;

  let data= "";
  request.on('data', (chunk)=> {
      data += chunk;
  });
  request.on("end", () => {
      let task = JSON.parse(data);
      if(task.title && task.description){
      addID(task);
      addTimestamp(task);
      todos.push(task);
      response.end();
  } else {
      response.statusCode=400;
      response.end("BAD REQUEST");
  }
  });
}

function listTodos(request,response){
  response.setHeader('Content-type', 'application/json');
  response.end(JSON.stringify(todos));
}

function deleteTodo(request,response,url){
  if(url.query.id){
      let newTodos = [];
      for( let i=0; i<todos.length; i++){
          if(todos[i].id != url.query.id){
              newTodos.push(todos[i]);
          }
      }
      todos=newTodos;
      response.end();
  } else {
      response.statusCode=400;
      response.end("BAD REQUEST");
  }
}

function updateTodo(request,response,url){
  if(url.query.id){
      for( let i=0; i<todos.length; i++){
          if(todos[i].id == url.query.id){

              let data= "";
              request.on('data', (chunk)=>{
                  data += chunk;
              });
              request.on("end", () => {
                  let task= JSON.parse(data);
                  task.id=todos[i].id;
                  if(task.title && task.description){
                      todos[i]=task;
                      response.end();
                  } else {
                      response.statusCode=400;
                      response.end("BAD REQUEST");
                  }
              });
          }
      }
  } else {
      response.statusCode=400;
      response.end("BAD REQUEST");
  }
}

module.exports = {
  addTodo, listTodos, deleteTodo, updateTodo
};