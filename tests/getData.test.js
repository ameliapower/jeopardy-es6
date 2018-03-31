const expect = require('chai').expect;
const should = require('chai').should();
const assert = require('chai').assert;
import { getData } from '../src/js/getData.js'


// console.log(fetch('http://jservice.io/api/categories?&count=3')
// 	.then( data => data ));

	describe('fetching the data', function(){
		it('checks length of response', function(){
			return getData('http://jservice.io/api/categories?&count=1')
			.then(function(result){
				result.should.have.lengthOf(1);
			});
		}); 


		it('resolves to 200 response', function(){
			return fetch('http://jservice.io/api/categories?&count=3')
			.then(function(result){
				// console.log(result.status);
				assert.equal(200, result.status);
			});
		});

}); //describe







