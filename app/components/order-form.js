import Ember from 'ember';

export default Ember.Component.extend({
  selectedBlend: null,

  actions: {
    selectBlend(blend) {
      this.set('selectedBlend', blend);
    },

    orderBlend() {
      var params = {
        blendObject: this.get('selectedBlend'),
        quantity: this.get('quantity')
      };
      this.sendAction('orderBlend', params);
    },
  }
});
