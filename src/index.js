import "./styles.css";
//import $ from "jquery";

//method chaining
const Dom = {
  $el: null,
  get: function(selector) {
    this.$el = document.querySelector(selector);
    return this;
  },
  addClass: function(className) {
    this.$el.classList.add(className);
    return this;
  },
  removeClass: function(className) {
    this.$el.classList.remove(className);
    return this;
  },
  html: function(content) {
    this.$el.innerHTML = content;
    return this;
  }
};

Dom.get("#app")
  .addClass("red")
  .removeClass("red")
  .html("hello world again");

//liberary like jquery
const $ = selector => {
  const self = {
    element: document.querySelector(selector),
    html: () => self.element,
    hide: () => {
      self.element.style.display = "none";
      return self;
    },
    show: () => {
      self.element.style.display = "block";
      return self;
    },
    on: (event, callback) => {
      self.element.addEventListener(event, callback);
      return self;
    },
    addClass: className => {
      self.element.classList.add(className);
      return self;
    },
    removeClass: className => {
      self.element.classList.remove(className);
      return self;
    }
  };
  return self;
};

console.log($("#app").html());

$("#app")
  .on("click", function() {
    alert("hello world");
  })
  .addClass("red")
  .hide()
  .show();
