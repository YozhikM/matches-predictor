/* @flow */

export default function bubbleSort(array: Array<any>): Array<any> {
  let n = array.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (array[j + 1] < array[j]) {
        let t = array[j + 1];
        array[j + 1] = array[j];
        array[j] = t;
      }
    }
  }
  return array;
}
