import DS from 'ember-data';
const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  title: attr('string'),
  body: attr('string'),

  // assocations
  user: belongsTo('service-user'),
  comments: hasMany('service-comment')

});
