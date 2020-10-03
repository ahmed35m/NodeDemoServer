const EventEmmitter = require('events')
const uuid = require('uuid')

console.log(uuid.v4());

class Logger extends EventEmmitter{
    log(msg){
        this.emit('message',{id: uuid.v4()  , msg})
    }
}

module.exports = Logger