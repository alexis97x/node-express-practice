const EventEmitter = require('events')
class Sender extends EventEmitter {
    send(message) {
        console.log("sup nigga, " +  message)
        this.emit('drink', { drink: 'c2', status: 'dehydrated' })
    }
}

module.exports = Sender