import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      greens: this.store.findAll('green'),
      roasteds: this.store.findAll('roasted'),
      blends: this.store.findAll('blend'),
      orders: this.store.findAll('order')
    });
  },
});
