import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  phone: DS.attr('string'),
  amount: DS.attr('number'),
})
