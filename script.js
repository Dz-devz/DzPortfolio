function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link0 = document.getElementById("link0");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link0.addEventListener("click", () => {
  scrollToElement(".header-projects");
});

link1.addEventListener("click", () => {
  scrollToElement(".header-portfolio");
});

link2.addEventListener("click", () => {
  scrollToElement(".header-hobbies");
});

link3.addEventListener("click", () => {
  scrollToElement(".header-about");
});

// Typing text effect JS

const dynamicText = document.querySelector(".dz-blur");
const words = ["Dz.dev,"];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    //If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    //if condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};
typeEffect();

const dynamicTexts = document.querySelector(" .f-blur");
const words1 = ["Full Stack Developer"];

let wordIndex1 = 0;
let charIndex1 = 1;
let isDeleting1 = false;

const typeEffect1 = () => {
  const currentWord1 = words1[wordIndex1];
  const currentChar1 = currentWord1.substring(0, charIndex1);
  dynamicTexts.textContent = currentChar1;
  dynamicTexts.classList.add("stop-blinking");

  if (charIndex1 < currentWord1.length) {
    //If condition is true, type the next character
    charIndex1++;
    setTimeout(typeEffect1, 200);
  } else {
    dynamicText.classList.remove("stop-blinking");
  }
};
typeEffect1();

// Matrix effect

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "red");
gradient.addColorStop(0.2, "yellow");
gradient.addColorStop(0.4, "green");
gradient.addColorStop(0.6, "cyan");
gradient.addColorStop(0.8, "blue");
gradient.addColorStop(1, "magenta");

class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters = "Dz.dev";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = "";
    this.canvasHeight = canvasHeight;
  }
  draw(context) {
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 25;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
    console.log(this.symbols);
  }
  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }
  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 30;
const nextFrame = 1000 / fps;
let timer = 0;

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  if (timer > nextFrame) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.textAlign = "center";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = gradient; //'#0aff0a';
    ctx.font = effect.fontSize + "px monospace";
    effect.symbols.forEach((symbol) => symbol.draw(ctx));
    timer = 0;
  } else {
    timer += deltaTime;
  }

  requestAnimationFrame(animate);
}
animate(0);

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  effect.resize(canvas.width, canvas.height);
});
