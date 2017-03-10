(function(){
    let people = 0

    //cache DOM
    const $stats = $('#statsModule')
    const template = $('#stats-template').html()

    events.on('peopleChanged', setPeople)

    _render()

    function _render() {
       $stats.html(Mustache.render(template, {people: people}))
    }

    function setPeople(newPeople) {
        people = newPeople
        _render()
    }
})()