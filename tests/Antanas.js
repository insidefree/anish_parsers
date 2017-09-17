const func01 = (val1, callback) => {
    console.log(val1)
    setTimeout(() => {
        callback(val1)
    }, 5000)
}

// func01('start funck01', val => console.log('Value from callback: ', val))

const wrapFunc01 = () => {
    return new Promise(resolve => {
        func01('Start func01 inside Promise', resolve)
    })
}

wrapFunc01()
    .then(() => { console.log('Finish') })