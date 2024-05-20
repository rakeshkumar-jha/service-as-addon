import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  title: attr('string'),
  url: attr('string'),
  thumbnailUrl: attr('string'),

  // assocations
  album: belongsTo('service-album')
});
