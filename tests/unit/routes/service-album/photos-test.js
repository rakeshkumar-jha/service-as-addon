import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | service-album/photos', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:service-album/photos');
    assert.ok(route);
  });
});
