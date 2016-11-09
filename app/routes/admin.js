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
      createOrder(params) {
        //Create an Order!
        var newOrder = this.store.createRecord('order', params);
        newOrder.save();
      },
      fulfillOrder(params) {
        //Order Fulfillment
        var paramBlendID = params.orderObject.data.blendID;
        var paramBlendName = params.orderObject.data.blendName;
        var paramsWeight = params.orderObject.data.weight;
        var paramsCustomerName = params.orderObject.data.customerName;
        var paramsFulfilled = params.orderObject.data.fulfilled;
        var paramsID = params.orderObject.id;
        var _this = this;
        var fulfilledSetTrue = function(paramsID) {
          _this.store.findRecord('order', paramsID
        ).then(function(response) {
          response.set('fulfilled', true);
          response.save();
          console.log(response.get('fulfilled'));
        })
        }
        fulfilledSetTrue(paramsID);
        this.store.findRecord('blend', paramBlendID
      ).then(function(response){
        response.get('recipe').forEach(function(ingredient){
          var ingredientPercent = ingredient.percent;
          _this.store.findRecord('roasted', ingredient.roastID
        ).then(function(response){
          response.set('weight', response.get('weight') - (paramsWeight * ingredientPercent));

          response.save();
          })
        })
        })
      },
      setTrueSendUp(params) {
        var paramsOrderID = params.id;
        console.log(params);
      }
    }
});
