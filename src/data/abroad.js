// const abroads = []
import abroads from './abroadsData.js'

const getName = item => item.name

const freeze = item => Object.freeze(item)
freeze(abroads)
abroads.forEach(item => item.list.forEach(freeze))

export default abroads

export function names () {
  return abroads.map(getName)
}

export function findByName(name) {
  return abroads.find(item => item.name === name)
}

export function findListItemByName (name) {
  var r
  abroads.some(item => {
    var t = item.list.find(item => item.name === name)
    if (t) {
      r = t
      return true
    }
  })
  return r
}
