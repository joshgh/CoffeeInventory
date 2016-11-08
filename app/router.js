import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dummyroute');
  this.route('admin');
  this.route('about');
  this.route('contact');
  this.route('orders');
});

export default Router;
