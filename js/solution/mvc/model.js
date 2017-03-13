var model = (function Model () {
  const people = []

  function create (value) {
    people.push(value)
    events.emit('peopleChanged', people)
  }

  function remove (i) {
    people.splice(i, 1)
    events.emit('peopleChanged', people)
  }

  function read () {
    return people
  }

  function bind (event, callback) {
    events.on(event, callback)
    events.emit('peopleChanged', people)
  }

  return {
    read,
    remove,
    create,
    bind
  }
})()