export function Args() {
  return arguments
}

export function Falsy() {
  return document.implementation.createHTMLDocument().all
}

export function RawElement(element = "div") {
  return function() {
    return document.createElement(element)
  }
}

export function StatefulFunc(fn) {
    return function() {
        return fn.bind(this)
    }
}

/*

  class No extends Falsy {
    constructor(favorite_car = "") {
      super()

      this.anything = favorite_car
    }
  }

  const about_me = new No("USS Enterprice")

  console.log(Boolean(about_me))  // false
  console.log(about_me || "Jet")  // "Jet"
  console.log(typeof about_me)    // "undefined"

*/

/*

  class Pirate extends Args {}
  
  console.log(new Pirate(2, "boats", 2, "sink")) Arguments: [2, "boats", 2, "sink", callee: Function]

*/

/*

  class MyElement extends RawElement("button") {
    constructor(text = "") {
      super()
      this.textContent = text

      this.onclick = () => {
        this.dataset.num = Math.random() * 10 | 0
      }
      this.onmouseover =()=> {
        console.log(this.dataset.num)
      }
    }
  }
  document.body.appendChild(new MyElement("Normally there is no way to create elements using `new`"))

*/

/*

  function MyLongFunction() {
    const x = 42
    const y = -8

    const x_ = this.invert(x)

    const z = this.add(x_, y)

    return this.invert(z)
  }

  class LongFunction extends StatefulFunc(MyLongFunction) {
    add(num1, num2) {
      return num1 + num2
    }
    invert(num) {
      return num * -1
    }
  }
  console.log(new LongFunction()) // using `new` will return a function!
  console.log(new LongFunction()()) // you can run the function

  // this is nice for breaking a function into the base part.

*/
