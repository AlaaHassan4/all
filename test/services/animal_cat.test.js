const assert = require('assert');
const app = require('../../src/app');

describe('\'animal_cat\' service', () => {
  it('registered the service', () => {
    const service = app.service('animal-cat');

    assert.ok(service, 'Registered the service');
  });
});
