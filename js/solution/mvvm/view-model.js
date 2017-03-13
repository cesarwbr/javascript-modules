var ViewModel = function ViewModel (people) {
  this.people = ko.observableArray(people.map(function (person) {
    return new Model(person)
  }))

  this.sortPeople = ko.computed(() => {
    return this.people().sort((a, b) => a.name() > b.name() ? 1 : -1)
  })

  this.current = ko.observable()

  this.addPerson = () => {
    this.people.push(new Model(this.current()))
    this.current('')
  }

  this.removePerson = (person) => {
    this.people.remove(person);
  }
}

var viewModel = new ViewModel([])
ko.applyBindings(viewModel)
