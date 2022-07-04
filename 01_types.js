const myPromise = () => Promise.resolve('вопросик решен')

function firstFunction() {
    myPromise().then(res => console.log(res))
    console.log('1')
}

async function secondFunction() {
    console.log(await myPromise())
    console.log('2')
}

firstFunction()
secondFunction()