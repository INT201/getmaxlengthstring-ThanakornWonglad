const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let arr = new Array()
  arr = arrayOfString
  let max = new Array()
  if (arrayOfString == null || arrayOfString == undefined) {
    return undefined
  }
  for (let i = 0; i < arr.length; i++) {
    let arrCom = [...arr[i]]
    if (arrCom.length > max.length) {
      max = arr[i]
    } else if (arrCom.length < max.length) {
      max = max
    }else if(arrCom.length==max.length){
      return [max,arr[i]]
    }
  }
  return [max]
}
module.exports = getMaxLengthString