var controller = (function Controller () {
  view.bind('deletePerson', function (index) {
    _deletePerson(index)
  })

  view.bind('addPerson', function (value) {
    _addPerson(value)
  })

  function _addPerson (value) {
    const people = model.read()

    if (people.indexOf(value) === -1) {
      model.create(value)
    }

    view.render(people.sort())
  }

  function _deletePerson (index) {
    model.remove(index)

    view.render(model.read().sort())
  }
})()