const selectionSort = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i
    for (let j = i; j < arr.length; j++) {
      if(arr[j] < arr[minimum]) {
        minimum = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minimum]
    arr[minimum] = temp
  }
  return arr
}

export default selectionSort