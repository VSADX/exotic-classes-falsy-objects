export function Args() {
  return arguments
}

export function Falsy() {
  const document_all = document.implementation.createDocument(null, null, null).all;
  Object.setPrototypeOf(document_all, this);
  return document_all;
}

export function RawElement(tag = "div") {
    const element = document.createElement(tag)
    const proto = this.constructor.prototype
    Object.getOwnPropertyNames(proto).slice(1).forEach(name => 
        element[name] = proto[name].bind(element))
  
    return element
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
