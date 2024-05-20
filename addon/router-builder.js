const buildServiceAsAddonRoute = (context) => {
  // top level route must be defined with context,
  // but child route must have own "this" to define routes
  context.route('service-albums', function() {
    // use this key for any child routes
    this.route('index', { path: '/' });
    this.route('photos', { path: '/photos' })
  });

  context.route('service-posts', { path: '/service-posts' }, function() {
    // use this key for any child routes
    this.route('index', { path: '/' });
    this.route('show', { path: '/:id' });
    this.route('new', { path: '/new' });
  });
}

export default buildServiceAsAddonRoute;
