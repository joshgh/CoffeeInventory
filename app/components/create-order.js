import Ember from 'ember';

export default Ember.Component.extend({
  selectedBlend: null,

  actions: {
    selectBlend(blend) {
      this.set('selectedBlend', blend);
    },

    createOrder() {
      var params = {
        blendID: this.get('selectedBlend').get('id'),
        blendName: this.get('selectedBlend').get('name'),
        weight: this.get('quantity'),
        fulfilled: false,
        customerName: this.get('customerName')
      };
      this.set('quantity', 0);
      this.set('customerName', "");
      this.sendAction('createOrder', params);
    },
  }
});
