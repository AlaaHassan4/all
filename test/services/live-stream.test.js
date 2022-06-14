const assert = require('assert');
const app = require('../../src/app');

describe('\'liveStream\' service', () => {
  it('registered the service', () => {
    const service = app.service('live-stream');

    assert.ok(service, 'Registered the service');
  });
});
