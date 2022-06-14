const assert = require('assert');
const app = require('../../src/app');

describe('\'hooks\' service', () => {
  it('registered the service', () => {
    const service = app.service('hooks');

    assert.ok(service, 'Registered the service');
  });
});
