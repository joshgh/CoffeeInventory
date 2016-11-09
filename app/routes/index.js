import Ember from 'ember';

export default Ember.Route.extend({
  action: {
    goToAdmin() {
      this.transitionTo('admin');
    }
  }
});
