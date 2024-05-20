import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | service-posts/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:service-posts/index');
    assert.ok(route);
  });
});
