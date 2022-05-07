const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]
// 方法一：使用flat()//使用 Infinity，可展开任意深度的嵌套数组
// var newArr = arr.flat(Infinity);
// 方法二：递归
var res = [];
function delArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      delArr(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
}
delArr(arr);
console.log('newArr', res);
