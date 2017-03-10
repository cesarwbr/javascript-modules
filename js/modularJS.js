
  const people = {
    people: ['Joao', 'Maria'],
    init () {
      this.selectDOM()
      this.listeners()
      this.render()
    },
    listeners () {
      this.$button.on('click', this.addPerson.bind(this))
      this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this))
    },
    selectDOM () {
      this.$el = $('#peopleModule')
      this.$button = this.$el.find('button')
      this.$input = this.$el.find('input')
      this.$ul = this.$el.find('ul')
      this.template = this.$el.find('#people-template').html()
    },
    addPerson () {
      const value = this.$input.val()
      this.people.push(value)
      this.$input.val('')
      this.render()
    },
    deletePerson (event) {
      const $remove = $(event.target).closest('li')
      const i = this.$ul.find('li').index($remove)

      this.people.splice(i, 1)

      this.render()
    },
    render () {
      const data = {
        people: this.people
      }
      this.$ul.html(Mustache.render(this.template, data))
    }
  }

  people.init()
