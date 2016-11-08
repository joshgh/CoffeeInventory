import Ember from 'ember';

export default Ember.Component.extend({
  selectedBean: null,
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
        name: this.get('selectedBean').get('name') + " " + this.get('selectedRoast'),
        weight: 0,
        greenID: this.get('selectedBean').get('id'),
        roastLevel: this.get('selectedRoast'),
        greenUsed: this.get('selectedBean').get('name')
      };
      this.sendAction('createRoast', params);
    }
  }
});
