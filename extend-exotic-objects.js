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
