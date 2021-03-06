var model = (function Model () {
  const people = []

  function create (value) {
    people.push(value)
    events.emit('peopleChanged', people)
  }

  function remove (index) {
    people.splice(index, 1)
    events.emit('peopleChanged', people)
  }

  function read () {
    return people
  }

  function bind (event, callback) {
    events.on(event, callback)
  }

  return {
    create,
    remove,
    read,
    bind
  }
})()