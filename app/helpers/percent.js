import Ember from 'ember';

export function percent(params) {
  return (params * 100).toFixed(2) + "%";
}

export default Ember.Helper.helper(percent);
