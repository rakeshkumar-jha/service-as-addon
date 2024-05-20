import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | service-posts/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:service-posts/show');
    assert.ok(route);
  });
});
