
let arr = ["HTML", "JavaScript", "CSS"];


let copySorted = function (arr){
  return [...arr].sort()
}

let sorted = copySorted(arr);
console.log(arr); // [3, 1]
console.log(sorted); // [3, 1]
