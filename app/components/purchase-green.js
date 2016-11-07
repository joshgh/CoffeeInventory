import Ember from 'ember';

export default Ember.Component.extend({
  selectedBean: 0,
  actions: {
    selectBean(bean) {
      this.set('selectedBean', bean);
      console.log(this.get('selectedBean'));
    },
    placeOrder(){
      var params= {
        id: this.get('selectedBean'),
        quantity: this.get('orderQuantity')
      }
      this.sendAction('placeOrder', params);
    }
  }
});
