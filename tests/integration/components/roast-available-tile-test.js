import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('roast-available-tile', 'Integration | Component | roast available tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{roast-available-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#roast-available-tile}}
      template block text
    {{/roast-available-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
