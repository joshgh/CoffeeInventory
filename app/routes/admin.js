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
      //Order More Green Beans!
      this.store.findRecord('green', params.id
      ).then(function(response) {
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
      //Roast Inventory Checker
      var _this = this;
      var blendQuantity = params.quantity;
      var blendRecipeArray = params.blendObject.data.recipe;
      this.store.query('roasted', {
            orderBy: 'name'
        }).then(function(response){
          _this.set('roastedOrderArray', []);
          var roastArray = response.content;
          var roastMessage = "";
          for (var i = 0; i < roastArray.length; i++) {
            for (var j = 0; j < blendRecipeArray.length; j++) {
              if (roastArray[i]._data.name === blendRecipeArray[j].name && roastArray[i]._data.weight < (blendQuantity * blendRecipeArray[j].percent)) {
                var newRoastWeight = (blendQuantity * blendRecipeArray[j].percent) - roastArray[i]._data.weight;
                _this.get('roastedOrderArray').pushObject([roastArray[i]._data.name, newRoastWeight]);
                roastMessage += "You need to roast " + newRoastWeight + " kg of " + roastArray[i]._data.name + "\n";
              }
              if (roastArray[i]._data.name === blendRecipeArray[j].name && roastArray[i]._data.weight > (blendQuantity * blendRecipeArray[j].percent)) {
                roastMessage += "You have enough of " + roastArray[i]._data.name + " to complete this order.\n";
              }
            }
          }
          alert(roastMessage);
        });
      },
      createOrder(params) {
        //Create an Order!
        var newOrder = this.store.createRecord('order', params);
        newOrder.save();
      },
      fulfillOrder(params) {
        //Order Fulfillment
        var paramBlendID = params.orderObject.data.blendID;
        var paramsWeight = params.orderObject.data.weight;
        var paramsID = params.orderObject.id;
        var _this = this;
        var fulfilledSetTrue = function(paramsID) {
          _this.store.findRecord('order', paramsID
        ).then(function(response) {
          response.set('fulfilled', true);
          response.save();
          console.log(response.get('fulfilled'));
        });
      };
        fulfilledSetTrue(paramsID);
        this.store.findRecord('blend', paramBlendID
      ).then(function(response){
        response.get('recipe').forEach(function(ingredient){
          var ingredientPercent = ingredient.percent;
          _this.store.findRecord('roasted', ingredient.roastID
        ).then(function(response){
          response.set('weight', response.get('weight') - (paramsWeight * ingredientPercent).toFixed(2));
          response.save();
        });
      });
    });
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
