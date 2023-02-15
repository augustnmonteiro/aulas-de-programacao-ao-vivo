

const posts = [
  {
    photo: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho.jpg",
    description: "Eu na praia",
    timestamp: 109238491283,
    autor: {
      name: "Augusto Monteiro",
      username: "augustnmonteiro",
      //FOTO ALEATORIA
      photo: "http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg"
    }
  },
  {
    photo: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho.jpg",
    description: "Eu na praia",
    timestamp: 109238491283,
    autor: {
      name: "Augusto Monteiro",
      username: "augustnmonteiro",
      //FOTO ALEATORIA
      photo: "http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg"
    }
  },
  {
    photo: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho.jpg",
    description: "Eu na praia",
    timestamp: 109238491283,
    autor: {
      name: "Augusto Monteiro",
      username: "augustnmonteiro",
      //FOTO ALEATORIA
      photo: "http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg"
    }
  },
];

for (let i=0; i<posts.length; i++) {
  let post = document.createElement("div");
  let username = document.createElement("span");
  let photo = document.createElement("img");

  username.innerText = "@" + posts[i].autor.username;
  photo.src = posts[i].photo;

  post.appendChild(username);
  post.appendChild(photo);
  post.className = "post";

  document.querySelector("#posts").appendChild(post);
}