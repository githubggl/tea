function cache(func) {
  var caches = {}
  return function(name) {
    var cache = caches[name]
    if(cache){
      return cache
    }
    return caches[name] = func(name)
  }
}

function findAllChinaTeaTypes () {
  return import('../data/chinaTea.js').then(obj => obj.names())
}

function findTeaTypeByName (name) {
  return import('../data/chinaTea.js').then(function (obj) {
    var item
    var n = name
    if(n){
      item = obj.findByName(name)
    }else{
      item = obj.default[0]
    }
    return item
  })
}
function findTeaDetailByName (name) {
  return import('../data/chinaTea.js').then(function (obj) {
    const item = obj.findPicByName(name)
    if (item) {
      return item.data().then(obj=>obj.default)
    }
  })
}
// export function findChinaTeaById (id) {
//   return import('../data/chinaTea.js').then(function (obj) {
//     return obj.findItemById(id)
//   })
// }


function findAllAbroads() {
  return import('../data/abroad.js').then(obj => obj.names())
}
function findAbroadByName(name) {
  return import('../data/abroad.js').then(function (obj) {
    var n = name
    var item
    if(n){
      item = obj.findByName(name)
    }else{
      item = obj.default[0]
    }
    return item
  })
}
function findAbroadDetailByName (name) {
  return import('../data/abroad.js').then(function (obj) {
    const item = obj.findListItemByName(name)
    if (item) {
      return item.data().then(obj=>obj.default)
    }
  })
}

function findDetailByName(name) {
  return findTeaDetailByName(name).then(function(data) {
    return data || findAbroadDetailByName(name)
  })
}

findTeaTypeByName = cache(findTeaTypeByName)
findTeaDetailByName = cache(findTeaDetailByName)
findAbroadByName = cache(findAbroadByName)
findAbroadDetailByName = cache(findAbroadDetailByName)
findDetailByName = cache(findDetailByName)

export {
  findAllChinaTeaTypes,
  findTeaTypeByName,
  findTeaDetailByName,
  findAllAbroads,
  findAbroadByName,
  findAbroadDetailByName,
  findDetailByName,
}
