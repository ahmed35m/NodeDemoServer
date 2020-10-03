// console.log('Hello World')

// const person1  = require('./person')
// console.log(person1)

const Logger = require('./logger')

const logger = new Logger()

logger.on('message',(data)=>{ console.log('Called Listener',data)})

logger.log('Hellow Worlds')