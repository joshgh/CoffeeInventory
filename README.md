# Coffee Inventory

This application is designed to allow a coffee roastery to manage their inventory from the ordering of green coffee beans through the fulfillment of orders.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd coffee-inventory`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Specifications

* app should allow a user to add to their inventory of green coffee beans
* app should allow a user to create a combination of green beans and roast level
* app should allow a user to "roast" beans moving them from the green inventory to the roasted inventory
* app should allow a user to create a blend to sell from the roasted beans available
* app should allow a user to create an order for a specific amount of a blend
* app should allow a user to fulfill orders, removing inventory from the roasted beans

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Development Team
This app was created as the JavaScript class group project at Epicodus by:
* Josh Huffman - j.m.huffman@gmail.com
* Tim Bourgault - tim.bourgault@gmail.com
* Chance Neff - crneff84@gmail.com
* Matthew Brandenburg - matt.bran87@gmail.com

### License
Licensed under the MIT License
