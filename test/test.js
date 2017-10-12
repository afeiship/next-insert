var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-insert');

describe('next/insert', function () {

  it('nx.insert insert index:1', function () {
    var arr = [1,2,3];
    var res = nx.insert(arr,2,['a','b']);
    assert.equal(arr, res);
    assert.deepEqual( res, [1,2,'a','b',3]);
  });


  it('nx.insert insert index: -1', function () {
    var arr = [1,2,3];
    var res = nx.insert(arr,-1,['a','b']);
    assert.deepEqual( res, [1,2,3,'a','b']);
  });


  it('nx.insert insert index: 0', function () {
    var arr = [1,2,3];
    var res = nx.insert(arr,0,['a','b']);
    assert.deepEqual( res, ['a','b',1,2,3]);
  });

});
