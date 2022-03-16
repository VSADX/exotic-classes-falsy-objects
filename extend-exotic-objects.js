export function Args() {
  return arguments
}

export function Falsy(make_falsy = true) {
  const document_all = make_falsy ? 
    document.implementation.createDocument(null, null, null).all : 
    {};
  Object.setPrototypeOf(document_all, this);
  return document_all;
}

export function enable_falsy_proxy() {
  const prx = new Proxy({}, {
      get: () =>  document.all
  })
  var orig = Object.getPrototypeOf(document.all)
  Object.setPrototypeOf(document.all, prx)
  return () => Object.setPrototypeOf(document.all, orig)
}
export function create_function_proxy() {
  class F extends Function { constructor() { super("return new F") } }
  Object.setPrototypeOf(Object.getPrototypeOf(new F), new Proxy({}, {
      get(t, p, r) { 
          return new F
      }
  }))
  return F
}

export function RawElement(tag = "div") {
    const element = document.createElement(tag)
    const proto = this.constructor.prototype
    Object.getOwnPropertyNames(proto).slice(1).forEach(name => 
        name.startsWith("on") ?
        element.addEventListener(name.slice(2), proto[name].bind(element)) :
        element[name] = proto[name].bind(element))
  
    return element
}

export class AsyncClass {
  static actualConstructor = Symbol()
  constructor(url = "", actuallyConstructing = [Symbol(), ""]) {
    if (arguments[1] !== undefined) 
      if (actuallyConstructing[0] === AsyncClass.actualConstructor)
        this.apply({ url, data: actuallyConstructing[1] }, this)
      else throw new TypeError();
    else return fetch(url)
        .then(r => r.text())
        .then(t => new Foo(url, [AsyncClass.actualConstructor, t]))
  }
  apply(obj) {
    for(key in obj) this[key] = obj[key]
  }
}

export function StateFn(fn, wrapped_this) {
    return () => fn.call(
        Object.setPrototypeOf(wrapped_this(), this))   
}

export function ProtoFn(fn) {
    return function() {
        return fn.bind(this)
    }
}

export function HoldFn(getter) {
    const ref = { get value() { return getter.apply(arguments, arguments) } }
    const { get } = Object.getOwnPropertyDescriptor(ref, "value")
    return [ref, get]
}

/**
// NaN
var scope = { get NaN() { return {} } }
with(scope) {
    console.log("isNaN(NaN)", isNaN(NaN))
    console.log("NaN === NaN", NaN === NaN)
    console.log("Number.isNaN(NaN)", Number.isNaN(NaN))
}
// isNaN(NaN) true
// NaN === NaN false
// Number.isNaN(NaN) false

var scope = {} // { get NaN() { return {} } }
with(scope) {
    console.log("isNaN(NaN)", isNaN(NaN))
    console.log("NaN === NaN", NaN === NaN)
    console.log("Number.isNaN(NaN)", Number.isNaN(NaN))
}
// isNaN(NaN) true
// NaN === NaN false
// Number.isNaN(NaN) true
**/
