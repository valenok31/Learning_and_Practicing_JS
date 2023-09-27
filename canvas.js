const arr = ['a', 'b', 'c' , {promo: 56}];

arr.test = 'bad';

for (let i in arr) {
    console.log(arr[i]);
}