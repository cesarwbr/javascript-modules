const people = (function(){
    const people = ['Maria', 'Joao']

    //cache DOM
    const $el = $('#peopleModule')
    const $button = $el.find('button')
    const $input = $el.find('input')
    const $ul = $el.find('ul')
    const template = $el.find('#people-template').html()

    //bind events
    $button.on('click', addPerson)
    $ul.delegate('i.del', 'click', deletePerson)

    _render()

    function _render() {
       $ul.html(Mustache.render(template, {people: people}))
       events.emit('peopleChanged', people.length)
    }

    function addPerson(value) {
        people.push($input.val())
        _render()
        $input.val('')
    }

    function deletePerson(event) {
        const $remove = $(event.target).closest('li')
        const i = $ul.find('li').index($remove)

        people.splice(i, 1)
        _render()
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();