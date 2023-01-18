// Solution 1 with map
const onceWithMap = function(fn) {
  const map = new Map()
  return function(...args) {
    if(map.has(fn)) {
      return map.get(fn)
    }
    const value = fn.call(this, ...args)
    map.set(fn, value)
    return value
  }
}


// Solution 2 with space optimization
const once = function(fn) {
  let hasRan = false;
  let value = undefined

  return function(...args) {
    if(hasRan) {
      return value
    }

    value = fn.call(this, ...args)
    hasRan = true;
    return value;
  }
}


export default once;