/* @flow */

export default function getObjectFlowType(target: any) {
  let str = "";
  if (typeof target === "object" && !Array.isArray(target)) {
    let newObj = {};
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        newObj[key] = typeof target[key];
      }
    }
    const firstEl = Object.keys(newObj);
    str += "{|";
    for (let key in newObj) {
      if (newObj.hasOwnProperty(key)) {
        if (newObj[key] === "object" && !Array.isArray(newObj[key])) {
          str += `${key}: Object`;
        } else {
          str += `${key}: ${newObj[key]}`;
        }
        if (firstEl[firstEl.length - 1] !== key) {
          str += ", ";
        }
      }
    }
    str += "|}";
  }
  return str;
}
