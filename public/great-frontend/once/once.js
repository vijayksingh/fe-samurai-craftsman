// Solution 1 with map
const once = function(fn) {
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



export default once;