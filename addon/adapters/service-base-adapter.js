
import ActiveModelAdapter from 'active-model-adapter';
import { computed } from '@ember/object';

const FEAndApiModelNameMap = {
  'service-user': 'user',
  'service-post': 'post',
  'service-comment': 'comment',
  'service-album': 'album',
  'service-photo': 'photo'
}
export default ActiveModelAdapter.extend({
  host: 'https://jsonplaceholder.typicode.com',
  defaultSerializer: '-service-base-serializer',
  headers: computed(function() {
    return { 'Content-Type': 'application/json' };
  }),

  buildURL(modelName, id, snapshot, requestType, query) {
    modelName = FEAndApiModelNameMap[modelName] || modelName;
    return this._super(modelName, id, snapshot, requestType, query)
  }
});
