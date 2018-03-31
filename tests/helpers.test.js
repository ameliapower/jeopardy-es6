const assert = require('chai').assert;
// const chai = require('chai').expect;

import { lowerCaseIt } from '../src/js/helpers.js'


describe("helpers", () => {
  it("should take in a string", () => {
  	assert.typeOf(lowerCaseIt('sdfasdfsfsafdsf'), 'string');
  });
});