import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      greens: this.store.findAll('green'),
      roasteds: this.store.findAll('roasted'),
      blends: this.store.findAll('blend')
    });
  },
  actions: {
    createRoast(params){
      var newRoast = this.store.createRecord('roasted', params);
      newRoast.save();
    },
    roastBeans(id) {
      let _this = this;
      this.store.findRecord('roasted', id).then(function(roast) {
        roast.set('weight', roast.get('weight') + 50);
        roast.save();
        return _this.store.findRecord('green', roast.get('greenID'));
      }).then(function(green) {
        green.set('weight', green.get('weight') - 50);
        green.save();
      });
    }
  }
});
