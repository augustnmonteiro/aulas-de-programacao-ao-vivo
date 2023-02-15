class Element {

  addButton(app, callback) {
    const button = document.createElement("button");
    button.textContent = "+1";
    button.addEventListener("click", () => {
      callback();
    });
    app.appendChild(button);
  }

}

class Counter {

  app = null;
  span = null;
  i = 15;
  element = null;

  constructor() {
    this.element = new Element();
    this.app = document.querySelector("#app");
    this.addSpan();
    this.element.addButton(app, () => {
      this.addPlus1();
    });
  }

  addSpan() {
    this.span = document.createElement("span");
    this.span.textContent = this.i;
    this.app.appendChild(this.span);
  } 

  addPlus1() {
    this.i++;
    this.span.textContent = this.i;
  }

}

const count = new Counter();