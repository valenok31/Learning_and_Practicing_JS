const promise = Promise.reject(17)

promise.then(
    function fulfilledReaction(value) {

        let err = 'fatal'
        console.log({value, err})
    },
    function rejectedReaction(error) {
        console.log({error})

    }
)