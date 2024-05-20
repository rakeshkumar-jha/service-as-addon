import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | service-post/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:service-post/edit');
    assert.ok(route);
  });
});
