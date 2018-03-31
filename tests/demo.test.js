const assert = require("assert");
// const add = require("./demo"); // import an unnamed fn
// const add = require("./demo").add; //import named fn
import { add } from './demo';


describe("Demo", function(){
  it("should add correctly", function(){
    assert.equal(add(1, 1), 2);
  });
});


//careful using arrow functions as Mocha can’t bind its helper functionality correctly when lambdas are used. Same with Sinon.
