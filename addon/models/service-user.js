import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  username: attr('string'),
  name: attr('string'),
  email: attr('string')
});
