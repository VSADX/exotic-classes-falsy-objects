# Class Extend Exotic Objects

## Examples
### Extending `document.all` AKA the only `falsy` `object` in JavaScript
```js
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
```
### Extending the `arguments` object
```js
  class Pirate extends Args {}
  
  console.log(new Pirate(2, "boats", 2, "sink")) Arguments: [2, "boats", 2, "sink", callee: Function]
```
### Extending specific `HTMLElements`
```js
  class MyElement extends RawElement() {
    constructor(text = "") {
      super("button")
      
      this.textContent = text
    }
      
    onclick() {
      this.dataset.num = Math.random() * 10 | 0
    }

    onmouseover() {
      console.log(this.dataset.num)
    }
  }
  document.body.appendChild(new MyElement("Normally there is no way to create elements using `new`"))
```
### Adding functions on to a `function`
```js
  function MyLongFunction() {
    const x = 42
    const y = -8
    const x_ = this.invert(x)
    const z = this.add(x_, y)
    return this.invert(z)
  }
  class LongFunction extends ProtoFn(MyLongFunction) {
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
```
  
### Adding state to a `function`
```js
function printPizza() {
  let old_toppings = this.kind
  this.change()
  return `${old_toppings} ${this.kind} Pizza`
}
class Pizza extends StateFn {
  constructor(some_fn) {
    super(some_fn, () => this)

    this.kind = "Cheese"
  }
  change() { this.kind = "Pepperoni" }
}
let pizzafn = new Pizza(printPizza)
console.log(pizzafn()) // "Cheese Pepperoni Pizza"
```

References:  
@/Simon_, @/Okku
