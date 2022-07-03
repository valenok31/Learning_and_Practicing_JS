const promise = Promise.resolve(17)

promise.then(
    function fulfilledReaction(value){
        console.log({value})
    },
    function rejectedReaction(error){
        console.log({error})
        throw error
    }
)