Array.prototype.myFilter = function (callbackFn, thisArg) {
    let result = []
    this.forEach((item, index) => {
        if(callbackFn.call(thisArg, item, index, this)) {
          result.push(item)
        }
    })
    return result
};