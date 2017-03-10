const people = []

const template = $('#people-template').html()

$('#peopleModule').find('button').on('click', function() {
  people.push($('#peopleModule').find('input').val())
  $('#peopleModule').find('input').val('')
  // data for mustache template
  const data = {
    people: people
  }
  $('#peopleModule').find('ul').html(Mustache.render(template, data))
})

$('#peopleModule').find('ul').delegate('i.del', 'click', function(e) {
  const $remove = $(e.target).closest('li')
  const i = $('#peopleModule').find('ul').find('li').index($remove)

  $remove.remove()

  people.splice(i, 1)
})