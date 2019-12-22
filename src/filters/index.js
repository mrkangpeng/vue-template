// 超出生成省略号
const ellipsis = function(value, limitLength) {
  if (value.length > limitLength) {
    return value.substring(0, limitLength) + '...'
  }
  return value
}
// 隐藏手机号中间4位
const hideStr = function(tel) {
  return tel.substring(0, 3) + '****' + tel.substring(tel.length - 4)
}
export {
  ellipsis,
  hideStr
}
