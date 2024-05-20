import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  showPosts: false,

  actions: {
    togglePosts() {
      this.set('showPosts', !this.showPosts)
    }
  }
});
