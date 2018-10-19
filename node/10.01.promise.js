
const promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log('setTimeout is over.')
        Math.random() > 0.5 ? resolve('over then 0.5') : reject('less than 0.5')
        console.log('promise is over, now return ')
    }, 2000)
})


promise
    .then((message) => console.log('in then, over 0.5'))
    .catch(error => console.log('in catch error, less than 0.5'))


console.log('in the outside')