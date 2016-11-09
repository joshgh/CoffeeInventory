import Ember from 'ember';

export default Ember.Component.extend({
  selectedOrder: null,

  actions: {
    selectOrder(order) {
      this.set('selectedOrder', order);
    },

    fulfillOrder() {
      var params = {
        orderObject: this.get('selectedOrder')
      };
      this.sendAction('fulfillOrder', params);
    },


  }

});
