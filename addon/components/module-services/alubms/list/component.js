import Component from '@ember/component';
import { inject } from '@ember/service';
import { get } from '@ember/object';
import layout from './template';

export default Component.extend({
  layout,
  store: inject(),
  isLoading: false,
  showClose: false,

  init() {
    this._super(...arguments);
    this.set('albums', []);
    this.fetchAlbums();
  },

  async fetchAlbums() {
    this.set('isLoading', true);
    try {
      let albums = await get(this, 'store').findAll('service-album');
      this.set('albums', albums);
    } catch(error) {
      console.log("error", error);
    } finally {
      this.set('isLoading', false);
    }
  },

  closeAction: () => { },

  actions: {
    onClose() {
      if(get(this, 'showClose')) {
        let action  = get(this, 'onClose') || this.closeAction;
        action();
      }
    }
  }
});
