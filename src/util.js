export function splitArr (items, subLength) {
  var index = 0
  var r = []
  items = items || []
  while (true) {
    var from = subLength * index
    var to = from + subLength
    var subItems = items.slice(from, to)
    if (subItems.length) {
      r.push(subItems)
      index++
    } else {
      break
    }
  }
  return r
}
