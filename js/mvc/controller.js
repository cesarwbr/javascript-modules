var controller = (function Controller () {
  function addPerson (value) {
    const people = model.read()
    if (people.indexOf(value) === -1) {
      model.create(value)
    }
  }

  function deletePerson (index) {
    model.remove(index)
  }

  return {
    addPerson,
    deletePerson
  }
})()