let theLift = function (queues, capacity) {
    // Your code here!
    let queuesA = [...queues];
    let stops = [0];
    let nextFloor = [];
    let floors = queuesA.length;

    let down = function (stops, nextFloor) {
        let queuesA = [...queues];
        let floors = queuesA.length;

        //console.log(nextFloor)

        for (let i = floors - 1; i > -1; i--) {
            //for (let i = 0; i < 10; i++) {
            //console.log(floors)
            if (queuesA[i][0] !== undefined) {
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
        //console.log(queuesA[i][0])
        if (!!queuesA[i][0]) {


            let fellow = queuesA[i].length;
            queuesA[i].sort((a,b)=>{
               return a-b
            });
            //console.log(queuesA[i])
            for (let h = 0; h < fellow; h++) {

                if (queuesA[i][h] > i) {
                    //console.log(stops[stops.length - 1] + ' ' + i)
                    //stops.push(i);
                    if (stops[stops.length - 1] !== i) {
                        stops.push(i);
                    }
                    console.log(queuesA[i])
                    nextFloor.push(queuesA[i][h])

                    //queuesA[i].splice(0, 1)
                    //console.log(queuesA[i])
                    //queuesA[i] = [];
                }

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
    [4, 3, 5], // 1
    [], // 2
    [2], // 3
    [], // 4
    [3], // 5
    [], // 6
];

let capacity = 5;

console.log(theLift(queues, capacity))