module.exports = function (func) {
  return function (args) {
    return func.apply(null, args)
  }
}

