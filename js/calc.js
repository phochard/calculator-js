/* export function greetings() {
    let sayHi = document.querySelector('.greetings ');
    sayHi.textContent = "Welcome !";
    sayHi.style.color = "#2a2a2a";
} */
export class Calculator {
    constructor(createHTMLElement, init, calculate) {
        this.createHTMLElement = function(tag, classes, parentElement, text) {
            let el = document.createElement(tag);
            if (classes) {
                el.classList.add(classes);
            }
            if (text) {
                el.textContent = text;
            }
            if (parentElement) {
                parentElement.append(el);
                return el;
            }
        }
        this.init = function() {
            let calculator = this.createHTMLElement("div", "calcul", document.body);
            let screen = this.createHTMLElement("header", "calcul__head", calculator);
            let ul = this.createHTMLElement("ul", "", calculator);
            let li = this.createHTMLElement("li", "", ul);
            let lisArr = [{
                class: "calcul__operator",
                id: "+",
                text: "+",
                number: 1
            }, {
                class: "calcul__operator",
                id: "-",
                text: "-",
                number: 1
            }, {
                class: "calcul__operator",
                id: "*",
                text: "*",
                number: 1
            }, {
                class: "calcul__operator",
                id: "/",
                text: "/",
                number: 1
            }, {
                class: "calcul__element",
                id: 9,
                text: "9",
                number: 2
            }, {
                class: "calcul__element",
                id: 8,
                text: "8",
                number: 2
            }, {
                class: "calcul__element",
                id: 7,
                text: "7",
                number: 2
            }, {
                class: "calcul__element",
                id: 6,
                text: "6",
                number: 2
            }, {
                class: "calcul__element",
                id: 5,
                text: "5",
                number: 2
            }, {
                class: "calcul__element",
                id: 4,
                text: "4",
                number: 2
            }, {
                class: "calcul__element",
                id: 3,
                text: "3",
                number: 2
            }, {
                class: "calcul__element",
                id: 2,
                text: "2",
                number: 2
            }, {
                class: "calcul__element",
                id: 1,
                text: "1",
                number: 2
            }, {
                class: "calcul__element",
                id: 0,
                text: "0",
                number: 2
            }, {
                class: "calcul__element",
                id: ".",
                text: ".",
                number: 2
            }, {
                class: "calcul__clear",
                id: "AC",
                text: "AC",
                number: 2
            }, {
                class: "calcul__result",
                id: "=",
                text: "=",
                number: 2
            }]
            let button;
            for (let i = 0; i < lisArr.length; i++) {
                button = this.createHTMLElement("button", lisArr[i].class, li, lisArr[i].text);
            }
        }
        this.calculate = function() {
            let display = document.querySelector('.calcul');
            console.log(display);
            display.addEventListener("click", function(event) {
                console.log(event.target.textContent);
                let screenContent = document.querySelector('.calcul__head');
                if (event.target.textContent === "AC") {
                    screenContent.textContent = " ";
                } else if (event.target.textContent === "=") {
                    screenContent.textContent = eval(screenContent.textContent);
                } else if (event.target.textContent.length === 1) {
                    screenContent.textContent += event.target.textContent;
                }
            });
        }
    }
}
export class Calc1 extends Calculator {
    constructor(createHTMLElement, init, calculate) {
        super(createHTMLElement, init, calculate);
    }
}