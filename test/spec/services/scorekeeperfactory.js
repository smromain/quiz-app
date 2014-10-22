'use strict';

describe('Service: scoreKeeperFactory', function () {

  // load the service's module
  beforeEach(module('quizApp'));

  // instantiate service
  var scoreKeeperFactory;
  beforeEach(inject(function (_scoreKeeperFactory_) {
    scoreKeeperFactory = _scoreKeeperFactory_;
  }));

  it('should do something', function () {
    expect(!!scoreKeeperFactory).toBe(true);
  });

});
