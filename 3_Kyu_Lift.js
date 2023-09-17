let theLift = function (queues, capacity) {
    // Your code here!
    let queuesA = [...queues];
    let stops = [0];
    let nextFloor = [];

    let down = function (stops, nextFloor, queuesA) {
        //let queuesA = [...queues];
        let floors = queuesA.length;
        for (let i = floors - 1; i > -1; i--) {
            while (nextFloor.indexOf(i) !== -1) {
                nextFloor.splice(nextFloor.indexOf(i), 1)
                if (stops[stops.length - 1] !== i) {
                    stops.push(i);
                }
            }

            if (queuesA[i][0] !== undefined) {
                let fellow = queuesA[i].length;
/*                queuesA[i].sort((a, b) => {
                    return b - a
                });*/
                for (let h = 0; h < fellow; h++) {
                    if (queuesA[i][h] < i/* && nextFloor.length<capacity*/) {
                        if (stops[stops.length - 1] !== i) {
                            stops.push(i);
                        }
                        if(nextFloor.length<capacity) {
                            nextFloor.push(queuesA[i][h])
                            queuesA[i].splice(h,1);
                            h=h-1;
                        }
                    }
                }
            }


            if (i === 0 &&
                stops[stops.length - 1] !== 0 &&
                queuesA.flat()[0]===undefined) {
                stops.push(0);
            }

        }
        if(queuesA.flat()[0]!==undefined){
            up(stops, nextFloor, queuesA);
        }
    }

    let up = function (stops, nextFloor, queuesA) {
        //let queuesA = [...queues];
        let floors = queuesA.length;
        for (let i = 0; i < floors; i++) {
            while (nextFloor.indexOf(i) !== -1) {
                nextFloor.splice(nextFloor.indexOf(i), 1)
                if (stops[stops.length - 1] !== i) {
                    stops.push(i);
                }
            }

            if (queuesA[i][0] !== undefined) {
                let fellow = queuesA[i].length;
/*                queuesA[i].sort((a, b) => {
                    return a - b
                });*/
                for (let h = 0; h < fellow; h++) {
                    if (queuesA[i][h] > i/* && nextFloor.length<capacity*/) {
                        if (stops[stops.length - 1] !== i) {
                            stops.push(i);
                        }
                        if(nextFloor.length<capacity){
                            nextFloor.push(queuesA[i][h]);
                            queuesA[i].splice(h,1);
                            h=h-1;
                        }
                    }
                }
            }
            if (i === floors - 1) {
                down(stops, nextFloor, queuesA);
            }
        }
        return stops;
    }

    up(stops, nextFloor, queuesA);

    return stops

}


let queues = [
    [ 5, 7 ],        [],
    [ 14, 8, 5 ],    [ 14 ],
    [ 12, 3 ],       [],
    [ 10, 10, 4 ],   [],
    [ 14, 6, 4, 6 ], [ 8 ],
    [ 4, 9 ],        [ 8, 12 ],
    [ 1 ],           [],
    [ 10, 4, 13 ]
]

let capacity = 5;

console.log(theLift(queues, capacity))