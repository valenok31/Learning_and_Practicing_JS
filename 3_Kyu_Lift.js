let theLift = function (queues, capacity) {
    // Your code here!

    let stops = [0];
    let nextFloor = [];

    let down = function (stops, nextFloor) {
        let queuesA = [...queues];
        let floors = queuesA.length;

        for (let i = floors - 1; i > -1; i--) {
            if (queuesA[i][0] !== undefined) {
                let fellow = queuesA[i].length;
                queuesA[i].sort((a, b) => {
                    return b - a
                });
                for (let h = 0; h < fellow; h++) {
                    if (queuesA[i][h] < i) {
                        if (stops[stops.length - 1] !== i) {
                            stops.push(i);
                        }
                        if(nextFloor.length<capacity) {
                            nextFloor.push(queuesA[i][h])
                            queuesA[i].slice(h,1);
                            //delete queuesA[i][h];
                        }
                        //queuesA[i][h]=0;
                        //console.log(i + ' < ' + nextFloor)
                    }
                }
            }

            //if (nextFloor.indexOf(i) !== -1) {
            while (nextFloor.indexOf(i) !== -1) {
                if (stops[stops.length - 1] !== i) {
                    stops.push(i);
                }
                nextFloor.splice(nextFloor.indexOf(i), 1)
                //console.log(queuesA)
            }

            if(nextFloor.length>0 && i==0){
                //console.log(i + ' = ' + nextFloor)
                //up(stops, nextFloor);
            }

            if (i === 0 && stops[stops.length - 1] !== 0) {
                stops.push(0);

                //console.log(i + ' - ' + nextFloor)
            }

        }
        console.log(queuesA)
    }

    let up = function (stops, nextFloor) {
        let queuesA = [...queues];
        let floors = queuesA.length;

        for (let i = 0; i < floors; i++) {
            //console.log(queuesA + ' / ' + nextFloor)
            while (nextFloor.indexOf(i) !== -1) {
                nextFloor.splice(nextFloor.indexOf(i), 1)
                if (stops[stops.length - 1] !== i) {
                    stops.push(i);
                }
                //console.log(i + ' > ' + nextFloor)
            }


            if (queuesA[i][0] !== undefined) {
                let fellow = queuesA[i].length;
                queuesA[i].sort((a, b) => {
                    return a - b
                });
                for (let h = 0; h < fellow; h++) {
                    if (queuesA[i][h] > i) {
                        if (stops[stops.length - 1] !== i) {
                            stops.push(i);
                        }
                        if(nextFloor.length<capacity){
                            nextFloor.push(queuesA[i][h]);
                            //console.log(queuesA[i])
                            queuesA[i].splice(h,1);
                            //h=h-1;
                            //console.log('2='+queuesA[i])
                            //delete  queuesA[i][h];
                        }

                        //queuesA[i].splice(h, 1)
                        //console.log(i + ' > ' + nextFloor)
                    }
                }
            }

            //if (nextFloor.indexOf(i) !== -1) {
/*            while (nextFloor.indexOf(i) !== -1) {
                if (stops[stops.length - 1] !== i) {
                    stops.push(i);
                }
                nextFloor.splice(nextFloor.indexOf(i), 1)
                console.log(i + ' > ' + nextFloor)
            }*/
            if (i === floors - 1) {
                down(stops, nextFloor);
            }
        }
        return stops;
    }

    up(stops, nextFloor);

    return stops

}


let queues = [
    [], // G
    [0, 2, 5, 4], // 1
    [4, 1, 3, 6, 4], // 2
    [0, 2, 1, 4, 5, 4], // 3
    [5, 5, 5, 5], // 4
    [3, 2, 4, 6, 4], // 5
    [4, 4, 4], // 6
];

let capacity = 30;

console.log(theLift(queues, capacity))