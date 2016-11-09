import Ember from 'ember';

export default Ember.Component.extend({
  component1: null,
  component2: null,
  component3: null,
  component4: null,
  component5: null,
  component6: null,
  actions: {
    selectRoast1(value, event) {
      console.log(event);
      console.log(value.get('name'));
      this.set('component1', value);
      console.log(this.get('component1').get('name'));
    },
    selectRoast2(component) {
      this.set('component2', component);
    },
    selectRoast3(component) {
      this.set('component3', component);
    },
    selectRoast4(component) {
      this.set('component4', component);
    },
    selectRoast5(component) {
      this.set('component5', component);
    },
    selectRoast6(component) {
      this.set('component6', component);
    },
    saveBlend() {
      var components = [];
      for (let i = 1; i <= 6; i++) {
        if (this.get("percent" + i) > 0) {
          var component = {
            roastID: this.get("component" + i).get('id'),
            name: this.get("component" + i).get('name'),
            percent: parseFloat(this.get("percent" + i))
          };
          components.push(component);
        }
      }
      var params = {
        description: this.get('blendDescription'),
        name: this.get('blendName'),
        recipe: components
      };
      this.sendAction('saveBlend', params);
    }
  }
});
