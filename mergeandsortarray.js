function mergeandsort(arr1, arr2) {
  mergearr = [];
  mergearr = arr1.concat(arr2);
  mergearr.sort((a, b) => a - b);
  return mergearr;
}

const a1 = [11, 21, 31, 41];
const b1 = [22, 40, 61];
mergeandsort(a1, b1);