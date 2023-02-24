class Home {

  user = null;
  list = null;
  input = null;

  constructor(user) {
    this.user = user;
    document.querySelector("#app").innerHTML = "";
    this.createHomePage();
  }

  addGasto() {
    let valor = parseFloat(this.input.value);
    if (valor) {
      let li = document.createElement("li");
      li.innerText = `Gasto de R$ ${valor.toFixed(2)}`;
      this.list.appendChild(li);
      this.input.value = "";
    }
  }

  createHomePage() {
    let headerDiv = document.createElement("div");
    let heading = document.createElement("h2");
    heading.innerText = `Finanças APP, Olá ${this.user.name}`;
    headerDiv.className = "header";
    let logout = document.createElement("button");
    logout.innerText = "Sair";
    headerDiv.appendChild(heading);
    headerDiv.appendChild(logout);

    logout.addEventListener("click", () => {
      new Login();
    });

    let formValueDiv = document.createElement("div");
    formValueDiv.className = "value-form"

    this.input = document.createElement("input");
    this.input.placeholder = "Digite valor gasto";
    this.input.type = "number";

    let addValue = document.createElement("button");
    addValue.innerText = "Adicionar";

    addValue.addEventListener("click", () => {
      this.addGasto();
    });

    this.list = document.createElement("ul");
    this.list.className = "list";

    formValueDiv.appendChild(this.input);
    formValueDiv.appendChild(addValue);

    document.querySelector("#app").appendChild(headerDiv);
    document.querySelector("#app").appendChild(formValueDiv);
    document.querySelector("#app").appendChild(this.list);
  }

}

class Login {

  users = [{
    email: "augusto",
    password: "123",
    name: "Augusto"
  },{
    email: "joao",
    password: "321",
    name: "Joao"
  },{
    email: "chico",
    password: "222",
    name: "Chico"
  }];

  email = null;
  password = null;

  constructor() {
    document.querySelector("#app").innerHTML = "";
    this.createLoginPage();
  }

  checkCredentials() {
    let email = this.email.value;
    let password = this.password.value;
    if (email && password) {
      let user = null;
      for (let i=0; i<this.users.length; i++) {
        if (email == this.users[i].email && password == this.users[i].password) {
          user = this.users[i];
          break;
        }
      }
      if (user) {
        new Home(user);
      } else {
        alert("Dados invalidos, por favor tente novamente");
      }
    } else {
      alert("Email e senha são obrigatorios");
    }
  }

  createLoginPage() {
    this.email = document.createElement("input");
    this.email.type = "email";
    this.email.placeholder = "Digite seu email.";

    this.password = document.createElement("input");
    this.password.type = "password";
    this.password.placeholder = "Digite sua senha.";

    const button = document.createElement("button");
    button.innerText = "Login";

    button.addEventListener("click", () => {
      this.checkCredentials();
    });

    const loginDiv = document.createElement("div");
    loginDiv.id = "login";
    loginDiv.appendChild(this.email);
    loginDiv.appendChild(this.password);
    loginDiv.appendChild(button);
    document.querySelector("#app").appendChild(loginDiv);
  }

}

new Login();