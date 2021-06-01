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

export function RawElement(tag = "div") {
    const element = document.createElement(tag)
    const proto = this.constructor.prototype
    Object.getOwnPropertyNames(proto).slice(1).forEach(name => 
        name.startsWith("on") ?
        element.addEventListener(name.slice(2), proto[name].bind(element)) :
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
