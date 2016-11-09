import Ember from 'ember';

export default Ember.Component.extend({
  selectedOrder: null,

  actions: {
    selectOrder(order) {
      this.set('selectedOrder', order);
      console.log(this.get('selectOrder'))
    },

  }

});
