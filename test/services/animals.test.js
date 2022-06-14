const assert = require('assert');
const app = require('../../src/app');

describe('\'animals\' service', () => {
  it('registered the service', () => {
    const service = app.service('animals');

    assert.ok(service, 'Registered the service');
  });
});
