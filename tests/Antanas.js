const func01 = (val1, callback) => {
    console.log(val1)
    setTimeout(() => {
        callback(val1)
    }, 5000)
}

// it's async basic call of func01
// func01('start funck01', val => console.log('Value from callback: ', val)) 


// it's wrapper using Promises for calling functions step by step
const wrapFunc01 = () => {
    let text = 'Start func01 inside Promise'
    return new Promise(resolve => {
        func01(text, resolve)
    })
}

wrapFunc01()
    .then(text => console.log(text + ' was finished'))
    .then(() => console.log('continue what you want after calling async func'))