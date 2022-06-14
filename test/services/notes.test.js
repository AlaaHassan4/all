const assert = require('assert');
const app = require('../../src/app');

describe('\'Notes\' service', () => {
  it('registered the service', () => {
    const service = app.service('notes');

    assert.ok(service, 'Registered the service');
  });
});
