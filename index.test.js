var chai = require('chai');
var expect = chai.expect;

var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe('test app', function() {
  var app = require('./index');

  beforeEach(function() {
    sinon.spy(console, 'log');
  });

  afterEach(function() {
    console.log.restore();
  });

  describe('hello()', function() {
    it('prints "Hello you!" when argument "you" is given', function() {
      app.hello("you");
      expect(console.log).to.have.been.calledWith('Hello you!');
    });
  });
});
