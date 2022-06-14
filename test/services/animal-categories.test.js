const assert = require('assert');
const app = require('../../src/app');

describe('\'animal-categories\' service', () => {
  it('registered the service', () => {
    const service = app.service('animal-categories');

    assert.ok(service, 'Registered the service');
  });
});
