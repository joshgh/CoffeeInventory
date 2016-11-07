import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  model(){
    console.log(this.get('store'));
    return this.get('store').query('green');
  }
});
