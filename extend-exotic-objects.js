export function Args() {
  return arguments
}

export function Falsy() {
  const document_all = document.implementation.createDocument(null, null, null).all;
  Object.setPrototypeOf(document_all, null);
  return document_all;
}

export function RawElement(element = "div") {
  return function() {
    return document.createElement(element)
  }
}

export function StaticStatefulFunc(fn) {
    return function() {
        return fn.bind(this)
    }
}

export function DynamicStatefulFunc(fn) {
    return () => fn.call(this)
}
