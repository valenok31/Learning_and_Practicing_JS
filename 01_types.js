function makeWorker(a=0) {

    console.log(a)
}

makeWorker(1);

let work = makeWorker;

work();