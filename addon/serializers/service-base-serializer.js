import { pluralize, singularize} from 'ember-inflector';
import { decamelize } from '@ember/string'
import { ActiveModelSerializer } from 'active-model-adapter';
export default ActiveModelSerializer.extend({

  keyForRelationship: function (relationshipModelName, kind) {
    var key = decamelize(relationshipModelName);
    if (kind === "belongsTo") {
      return key + "Id";
    } else if (kind === "hasMany") {
      return singularize(key) + "Ids";
    } else {
      return key;
    }
  },

  normalizeFindAllResponse(store, modelClass, payload, id, requestType) {
    let payloadHash = {
      [pluralize(modelClass.modelName)]: payload
    }
    return this._super(store, modelClass, payloadHash, id, requestType);
  },

  normalizeFindRecordResponse(store, modelClass, payload, id, requestType) {
    let payloadHash = {
      [modelClass.modelName]: payload
    }
    return this._super(store, modelClass, payloadHash, id, requestType);
  }
});
