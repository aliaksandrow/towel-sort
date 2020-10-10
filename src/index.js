
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) return [];
  const arr = matrix.map((item, acc) => acc % 2 != 0 ? item.reverse() : item )  //.join().split()
return [].concat(...arr)
}
