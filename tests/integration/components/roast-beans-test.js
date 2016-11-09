import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('roast-beans', 'Integration | Component | roast beans', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{roast-beans}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#roast-beans}}
      template block text
    {{/roast-beans}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
