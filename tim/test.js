import {Person} from './oop.js'
import { setTimeoutPromise } from './timeoutPromise.js'

let dennis = new Person('dennis', 90)

async function main() {
    let startTime = Date.now()
    for (let i=0 ;i<10;i++) {
        try {
            
            let name = await setTimeoutPromise(123)
            let endTime = Date.now()
            console.log(`used time: ${endTime - startTime}`);
            console.log(`used time: ${endTime} - ${startTime}`);
            
            console.log(name);
        } catch (error) {
            console.log(error);
        }
    }
}

main()