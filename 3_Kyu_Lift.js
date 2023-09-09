let theLift = function (queues, capacity) {
    // Your code here!
    let queuesA = [...queues];
    let stops = [0];
    let nextFloor = [];
    let floors = queuesA.length;
    for (let i = 0; i < floors; i++) {
        if (!!queues[i][0]) {
            //console.log(i)
            if (stops[stops.length - 1] < i) {
                stops.push(i);
                nextFloor.push(queues[i][0])
            }
        }
        if (nextFloor.indexOf(i) !== -1) {
            if (stops[stops.length - 1] !== i) {
                stops.push(i);
            }
            nextFloor.splice(nextFloor.indexOf(i), 1)
        }
        if(i===floors-1){
            stops.push(0);
        }
    }
    return stops;
}

let queues = [
    [], // G
    [3], // 1
    [4], // 2
    [], // 3
    [5], // 4
    [], // 5
    [], // 6
];

let capacity = 5;

console.log(theLift(queues, capacity))