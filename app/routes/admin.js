import Ember from 'ember';

export default Ember.Route.extend({
  roastedOrderArray: [],
  model(){
    return Ember.RSVP.hash({
      greens: this.store.findAll('green'),
      roasteds: this.store.findAll('roasted'),
      blends: this.store.findAll('blend'),
      orders: this.store.findAll('order'),
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
      var blendQuantity = params.quantity;
      var blendName = params.blendObject.data.name;
      var blendRecipeArray = params.blendObject.data.recipe;
          this.store.query('roasted', {
            orderBy: 'name'
        }).then(function(response){
          _this.set('roastedOrderArray', []);
          var roastArray = response.content;
          for (var i = 0; i < roastArray.length; i++) {
            for (var j = 0; j < blendRecipeArray.length; j++) {
              if (roastArray[i]._data.name === blendRecipeArray[j].name && roastArray[i]._data.weight < (blendQuantity * blendRecipeArray[j].percent)) {
                var newRoastWeight = (blendQuantity * blendRecipeArray[j].percent) - roastArray[i]._data.weight;
                _this.get('roastedOrderArray').pushObject([roastArray[i]._data.name, newRoastWeight]);
                alert("You need to roast " + newRoastWeight + " kg of " + roastArray[i]._data.name);
              }
              if (roastArray[i]._data.name === blendRecipeArray[j].name && roastArray[i]._data.weight > (blendQuantity * blendRecipeArray[j].percent)) {
                alert("You have enough of " + roastArray[i]._data.name + " to complete this order. Continue to order-fulfillment form.");
              }
            }
          }
        })
      },
    }
});
