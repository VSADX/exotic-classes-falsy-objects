export function Args() {
  return arguments
}

export function Falsy() {
  const document_all = document.implementation.createDocument(null, null, null).all;
  Object.setPrototypeOf(document_all, this);
  return document_all;
}

export function RawElement(element = "div") {
  return function() {
    return document.createElement(element)
  }
}

export function StateFn(fn, wrapped_this) {
    return () => fn.call(
        Object.setPrototypeOf(wrapped_this(), this))   
}
