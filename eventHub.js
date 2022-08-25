const EventHub = {
    q: {},
    on: function(type, listener) {
        EventHub["q"][type] = EventHub["q"][type] || []
        EventHub["q"][type].push(listener)
    },
    emit: function(type, data) {
        EventHub["q"][type].map(listener => listener(data))
    },
    off: function(type, handler) {
        EventHub["q"][type].splice(EventHub["q"][type].findIndex(fn => fn === handler), 1)
    }
}