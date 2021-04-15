# Useful, hidden hacks for JavaScript


A 31 line library of 5 hacks you can use in JavaScript.

### Features

- Adding default events to HTML `<button>` or other elements.
- Extending the built-in `Function` class.
- Create custom `arguments` classes.
- Make any object or class `falsy`.

### Getting Started
#### Set defaults in HTML from JavaScript. 
Create a custom `<a>` or `<button>` `class` then create it:

```js
const book = new MyA("https://example.com/new-book-2021", "New Book!")
const food = new MyA("https://example.com/best-at-home-food-tips", "Food Hints!")

document.body.appendChild(book)
document.body.appendChild(food)
```

You customize your classes how you want, here's how ours turned into:

```html
<body>
	<a target="_blank" href="https://example.com/new-book-2021">
		New Book!
	</a>
	<a target="_blank" href="https://example.com/best-at-home-food-tips">
		Food Hints!
	</a>
</body>
```

**Where did `target="_blank"` come from?**  
The `class` we made in JavaScript set the target for us, 
any time we create a `new MyA()`.
**What can I customize in HTML elements from classes?**  
1. Set default attributes (like `className`, or `href`)
2. Store numbers, objects inside elements. 
**In the wiki:**  
1. Creating JS classes for HTML elements.
2. Adding event listeners - the easy way.
3. Storing state, data, objects in HTML elements.
For each topic there are detailed examples in the [wiki](https://github.com/VSADX/exotic-classes-falsy-objects/wiki/Extending-HTML-Elements)
  
#### Objects can be false in JavaScript.
It's not a joke, yep, every JS tutorial told you `{}` objects are 
_always_ true-ish. They'll always be converted to true if you place them 
inside an `if()` statement alone, or inside the `Boolean()` converter.
  
```js
let x = new WeirdFalseThing()
let y = new AnyOtherObject()

console.log("x", Boolean(x)) // "x" false
console.log("y", Boolean(y)) // "y" true

if(x) console.log("hi") // 

if(y) console.log("hi") // "hi"
```
  
**Why would I do this?**  
Since these "falsy" objects are really good at staying hidden, 
you can use them for exactly that. Useful for arrays of many types.  
**Can falsy objects have properties?**  
Absolutely, you can make any `class` create falsy objects, 
your can add methods/functions to your objects - even make 
your arrays falsy.  
**How does the magic work?**  
You'll have to check the [code](https://github.com/VSADX/exotic-classes-falsy-objects/blob/main/extend-exotic-objects.js#L5).
  
### Also in this repo.

#### Extending the built-in `arguments` object.
```js
class Pirate extends Args {}
  
console.log(new Pirate(2, "boats", 2, "sink")) 
// Arguments: [2, "boats", 2, "sink", callee: Function]
```
**Notes**  
These objects look like arrays, but they do not have the functions 
built into normal arrays. Also, they include a function `callee`, if you 
run it, it will create a new `Arguments` object.  
**Why would I do this?**  
There really isn't a known reason yet, there are a few cases - concepts 
like `overloading` are tedious in JavaScript - where `extends Arguments` 
may be helpful.  
Another idea is to recreate custom stack traces using `Arguments`, you can 
retrieve the stack using `new Error().stack`, but this potential method would 
have a custom setup.  
  
#### Classes that return executable functions!
**Notes**  
This is really cool, we always have had a `function` that could also be a 
class constructor, even making a `function` that returns a `function` is 
simple enough. What about a `class` that returns a `function`?
    
Unfortunately, there are not many ideas on what to do using it. You can 
pass a `function` to a `class` `constructor`, the class can operate on that 
function (binding a `this` to it, or something else), then return a new version 
of that function.
  
In JavaScript, functions already have `.bind` so it is hard to know the 
usefulness of this trick.

References
@/Simon_, @/Okku
