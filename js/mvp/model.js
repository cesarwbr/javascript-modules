var model = (function Model () {
  const people = []

  function create (value) {
    people.push(value)
  }

  function remove (i) {
    people.splice(i, 1)
  }

  function read () {
    return people
  }

  return {
    remove,
    create,
    read
  }
})()