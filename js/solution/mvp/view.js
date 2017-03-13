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

  function _addPerson(value) {
    events.emit('addPerson', $input.val())
    $input.val('')
  }

  function _deletePerson (index) {
    const $remove = $(event.target).closest('li')
    const i = $ul.find('li').index($remove)

    events.emit('deletePerson', i)
  }

  function render(people) {
    $ul.html(Mustache.render(template, {people: people}))
    events.emit('peopleChanged', people.length)
  }

  function bind (event, callback) {
    events.on(event, callback)
  }

  return {
    bind,
    render
  }
})()
