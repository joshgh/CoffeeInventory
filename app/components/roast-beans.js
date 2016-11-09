import Ember from 'ember';

export default Ember.Component.extend({
  beanToRoast: null,

  actions: {
    pickToRoast(bean) {
      this.set('beanToRoast', bean);
    },
    roastBeans() {
      this.sendAction('roastBeans', this.get('beanToRoast').id);
    }
  }
});
