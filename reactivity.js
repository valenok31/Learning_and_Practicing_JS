const data = {
    "buyingPrice" : 200,
    "sellingPrice": 400
}
let target = null;
class DependancyTracker{
    constructor(){
        this.subscribers = []
    }
    depend(){
        if(target && this.subscribers.includes(target) !== true){
            this.subscribers.push(target);
        }
    }
    notify(){
        for (let i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i]();
        }
    }
}
Object.keys(data).forEach(key => {
    let internal = data[key];
    let dep = new DependancyTracker()
    Object.defineProperty(data, key, {
        get: function() {
            dep.depend(); // link target function
            return internal;
        },
        set: function(val) {
            internal = val; // set value
            dep.notify(); // notify dependent variables linked funtion
        }
    })
})
// Watch function
function watch(func){
    target = func;
    target();
    target = null;
}
// Link calculateProfit function in watch
watch(() => {
    data.profit = data.sellingPrice - data.buyingPrice
})
console.log("Profit : "+data.profit) // Profit : 200
data.sellingPrice = 700
console.log("Profit : "+data.profit) // Profit : 500
data.sellingPrice = 900
console.log("Profit : "+data.profit) // Profit : 700