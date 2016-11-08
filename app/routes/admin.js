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
    placeOrder(params){
      this.store.findRecord('green', params.id
        // orderBy: 'name',
        // equalTo: params.name
      ).then(function(response) {
        console.log(response);
        let currentWeight = response.get('weight');
        let newWeight = currentWeight + (params.quantity * 50);
        response.set('weight', newWeight);
        response.save();
      }).catch(function(){
        console.log("error");
      }).finally(function(){
        console.log("promise resolved");
      });
    },
    orderBlend(params){
        var _this = this;
        this.store.findRecord('blend', params.id
        ).then(function(response){
          var blendQuantity = params.quantity;
          var recipeArray = response.data.recipe;

          for (var i = 0; i < recipeArray.length; i++) {
            var queryLog = _this.store.query('roasted', {
              orderBy: recipeArray[i].name
            }).then(function(response){
              console.log(response.content[0]._data.weight);
              var responseArray = response.content
              for (var j = 0; j < responseArray.length; j++) {

              }
            })
          }
        })
      },
    }
});
