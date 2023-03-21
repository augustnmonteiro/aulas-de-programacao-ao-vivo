
let currentId = 0;

function setupCurrentIdCategories(categories) {
  for (let i=0; i<categories.length; i++){
      if (categories[i].id > currentId)
        currentId = categories[i].id;
  }
}

function addID(category) {
  currentId = currentId + 1;
  category.id = currentId;
}

function addTimestemp(category) {
  category.createdAt = +new Date();
  category.updatedAt = +new Date();
}

function addCategory(request, response, url, todos, categories, writeCATEGORYtoFile) {
    response.statusCode = 201;
    let data = "";
    request.on('data', (chunk) => {
        data += chunk;
    });
    request.on("end", () => {
      let task = JSON.parse(data);
      if (task.name) {
        addID(task);
        addTimestemp(task);
        categories.push(task);
        writeCATEGORYtoFile();
        response.end();
      } else {
        response.statusCode = 400;
        response.end("BAD REQUEST");
      }
    }); 
} 

function listCategories(request, response, url, todos, categories) {
    response.setHeader ('Content-type', 'application/json')
    if (url.query.id) {
        let task = findById(url.query.id);
        if (task && (!task.deletedAt || url.query.showDeleted == "true")){
            response.end(JSON.stringify(task));
        }else {
            response.statusCode = 404;
            response.end("NOT FOUND");
        }
    } else {
        let newCategory = [];
        for (let i = 0; i <categories.length; i++){
            if(!categories[i].deletedAt || url.query.showDeleted == "true"){
                newCategory.push(categories[i]);
            }
        }
        response.end(JSON.stringify(newCategory));
    }
}

function deleteCategory(request, response, url, todos, categories, writeCATEGORYtoFile) {
  if(url.query.id){
      for(let i=0; i<categories.length; i++){
          if(categories[i].id == url.query.id){
            categories[i].deletedAt = +new Date();
            writeCATEGORYtoFile();
          }
      } 
      response.end();
  } else {
    response.statusCode = 400;
    response.end("BAD REQUEST");
  }
}

function updateCategory(request, response, url, todos, categories, writeCATEGORYtoFile) {
  if(url.query.id){
    for(let i=0; i<categories.length; i++) {
      if(categories[i].id == url.query.id && !categories[i].deletedAt) {
        let data = "";
        request.on('data', (chunk) => {
            data += chunk;
        });
        request.on("end", () => {
            let task = JSON.parse(data);
            if (task.name) {
              task.id = categories[i].id;
              task.createdAt = categories[i].createdAt;
              task.updatedAt = +new Date();
              categories[i] = task;
              writeCATEGORYtoFile();
              response.end();
            } else {
              response.statusCode = 400;
              response.end("BAD REQUEST");
            }
        });
        return;
      }
    }
    response.statusCode = 404;
    response.end("NOT FOUND");
  } else {
    response.statusCode = 400;
    response.end("BAD REQUEST");
  }
}

module.exports = {
  listCategories, addCategory, updateCategory, deleteCategory,setupCurrentIdCategories
}