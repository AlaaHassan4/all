const assert = require('assert');
const app = require('../../src/app');

describe('\'mongodb_livestream\' service', () => {
  it('registered the service', () => {
    const service = app.service('mongodb-livestream');

    assert.ok(service, 'Registered the service');
  });
});
