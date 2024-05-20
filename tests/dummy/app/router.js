import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import buildServiceAsAddonRoute from 'service-as-addon/router-builder'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('samples');
  buildServiceAsAddonRoute(this);
});

export default Router;
