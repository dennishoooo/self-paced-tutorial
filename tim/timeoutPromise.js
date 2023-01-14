export function setTimeoutPromise(name) {
    return new Promise((resolve, reject) => {
        if (typeof name != 'string') {
            reject('name please')
        }
        let  random = Math.random()
        if (random > 0.7) {
            setTimeout(()=>{
                resolve(name)
            },1000)
        }
        else {
            reject('fuck off')
        }
    })
}