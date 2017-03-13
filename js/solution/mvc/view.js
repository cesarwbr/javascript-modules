var view = (function View () {
  //cache DOM
  const $el = $('#peopleModule')
  const $button = $el.find('button')
  const $input = $el.find('input')
  const $ul = $el.find('ul')
  const template = $el.find('#people-template').html()

  //bind events
  $button.on('click', _addPerson)
  $ul.delegate('i.del', 'click', _deletePerson)

  model.bind('peopleChanged', _render)

  function _addPerson(value) {
    controller.addPerson($input.val())
    $input.val('')
  }

  function _deletePerson (index) {
    const $remove = $(event.target).closest('li')
    const i = $ul.find('li').index($remove)

    controller.deletePerson(i)
  }

  function _render(people) {
    $ul.html(Mustache.render(template, {people: people.sort()}))
  }
})()
