
let currentId = 1;

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

function addCategory(request, response, url, todos, categories) {
  response.statusCode = 201;
  let data = "";
  request.on('data', (chunk) => {
      data += chunk;
  });
  request.on("end", () => {
    let category = JSON.parse(data);
    if (category.name) {
      addID(category);
      addTimestemp(category);
      categories.push(category);
      response.end();
    } else {
      response.statusCode = 400;
      response.end("BAD REQUEST");
    }
  });  
} 

function listCategories(request, response, url, todos, categories) {
  response.setHeader('Content-type','application/json');
  if (url.query.id) {
    let category = findById(url.query.id, categories);
    if (category) {
      response.end(JSON.stringify(category));
    } else {
      response.statusCode = 404;
      response.end("NOT FOUND");
    }
  } else {
    response.end(JSON.stringify(categories));
  }
  }

module.exports = {
  listCategories, addCategory, setupCurrentIdCategories
}