let theLift = function (queues, capacity) {
    // Your code here!
    let queuesA = [...queues];
    let stops = [0];
    let nextFloor = [];
    let floors = queuesA.length;

    let down = function (stops, nextFloor) {
        let queuesA = [...queues];
        let floors = queuesA.length;

        console.log(nextFloor)

        for (let i = floors - 1; i >-1; i--) {
        //for (let i = 0; i < 10; i++) {
            //console.log(floors)
            if (queuesA[i][0]!==undefined) {
                //console.log(i)

/*                if (stops[stops.length - 1] > i) {
                    stops.push(i);
                    nextFloor.push(queuesA[i][0])

                    queuesA[i] = [];
                }*/

                if (queuesA[i][0] < i) {
                    //console.log(stops[stops.length - 1] + ' ' + i)
                    stops.push(i);
                    nextFloor.push(queuesA[i][0])
                    queuesA[i] = [];
                }


            }

            if (nextFloor.indexOf(i) !== -1) {
                if (stops[stops.length - 1] !== i) {
                    stops.push(i);
                }
                nextFloor.splice(nextFloor.indexOf(i), 1)
            }

            if (i === 0 && stops[stops.length - 1] !== 0) {
                stops.push(0);
            }
        }
    }


    for (let i = 0; i < floors; i++) {
        if (!!queuesA[i][0]) {
            //console.log(i)
/*            if (stops[stops.length - 1] < i) {
                //console.log(stops[stops.length - 1] + ' ' + i)
                stops.push(i);
                nextFloor.push(queuesA[i][0])
                queuesA[i] = [];
            }*/

            if (queuesA[i][0] > i) {
                //console.log(stops[stops.length - 1] + ' ' + i)
                stops.push(i);
                nextFloor.push(queuesA[i][0])
                queuesA[i] = [];
            }



        }
        if (nextFloor.indexOf(i) !== -1 /*&& stops[stops.length - 1] < i*/) {
            if (stops[stops.length - 1] !== i) {
                stops.push(i);
            }
            nextFloor.splice(nextFloor.indexOf(i), 1)
        }
        if (i === floors - 1) {
            down(stops, nextFloor);
        }
    }


    return stops;
}

let queues = [
    [], // G
    [0,3,5], // 1
    [], // 2
    [], // 3
    [], // 4
    [], // 5
    [], // 6
];

let capacity = 5;

console.log(theLift(queues, capacity))