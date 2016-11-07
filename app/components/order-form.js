import Ember from 'ember';

export default Ember.Component.extend({
  blend: null,

  actions: {
    selectBlend() {
      this.set('blend', event.target.value);
      console.log(this.get('blend'));
    },

    placeOrder() {
      var params = {
        name: this.get('blendChoice.name'),
        quantity: this.get('quantity')
      };
      this.sendAction('placeOrder', params);
    },
  }
});
