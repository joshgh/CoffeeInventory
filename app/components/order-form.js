import Ember from 'ember';

export default Ember.Component.extend({
  selectedBlend: 0,

  actions: {
    selectBlend(blend) {
      this.set('selectedBlend', blend);
    },

    orderBlend() {
      var params = {
        id: this.get('selectedBlend'),
        quantity: this.get('quantity')
      };
      this.sendAction('orderBlend', params);
    },
  }
});
