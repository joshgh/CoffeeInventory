import Ember from 'ember';

export default Ember.Component.extend({
  selectedBean: 0,
  selectedRoast: "light",
  formIsShowing: false,
  actions: {
    showForm() {
      this.set('formIsShowing', true);
    },
    selectBean(bean){
      this.set('selectedBean', bean);
    },
    selectRoast(roast) {
      this.set('selectedRoast', roast);
    },
    createRoast() {
      var params = {
        name: this.get('roastName'),
        weight: 0,
        greenID: this.get('selectedBean'),
        roastLevel: this.get('selectedRoast'),
        greenUsed: ""
      };
      this.set('roastName', "");
      this.sendAction('createRoast', params);
    }
  }
});
