/*
const items = [
  {
    id: 1,
    name: '绿茶',
    introduces: [''],
    pics:[
      {
        id: '1_1',
        name: '"西湖龙井',
        src: '',
        data: ()=>import('./xxx.js')
      }
    ]
  }
]
*/
import items from './itemsData.js'
const freeze = item => Object.freeze(item)
freeze(items)
items.forEach(item => item.pics.forEach(freeze))

const getName = item => item.name

export default items

export function names () {
  return items.map(getName)
}

export function findByName (name) {
  return items.find(item => item.name === name)
}

export function findPicByName (name) {
  var r
  items.some(item => {
    var t = item.pics.find(item => item.name === name)
    if (t) {
      r = t
      return true
    }
  })
  return r
}

export function findItemById (id) {
  if (!id) return
  if (id.indexOf('_') > 0) {
    var r
    items.some(item => {
      var t = item.pics.find(item => item.id === id)
      if (t) {
        r = t
        return true
      }
    })
    return r
  } else {
    return items.find(item => item.id === id)
  }
}

export function findPicsById (id) {
  var item = items.find(item => item.id === id)
  return item && item.pics || []
}
