import Ember from 'ember';

export default Ember.Component.extend({
  blend: null,
  model(){
    console.log(this.get('store'));
    return this.get('store').query('blends');
  },

  actions: {
    selectBlend(blend) {
      this.set('blend', blend);
    }
  }
});
