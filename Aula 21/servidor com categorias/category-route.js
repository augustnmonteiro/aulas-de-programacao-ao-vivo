
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
} 

function listCategories(request, response, url, todos, categories) {
}

module.exports = {
  listCategories, addCategory, setupCurrentIdCategories
}