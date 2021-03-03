
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length == 0) {
    return []
  } 
  return matrix.flatMap((element, index) => 
    index%2==1 ? element.reverse() : element
  );  
}



