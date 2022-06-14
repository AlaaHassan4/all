const assert = require('assert');
const app = require('../../src/app');

describe('\'sensor-data\' service', () => {
  it('registered the service', () => {
    const service = app.service('sensor-data');

    assert.ok(service, 'Registered the service');
  });
});
