(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.insert = function (inArray, inIndex, inTarget) {
    var length = inArray.length;
    var index = inIndex >= 0 ? inIndex : (length + inIndex + 1);
    var len = inTarget.len;
    inArray.splice.apply( inArray ,[ index, 0 ].concat(inTarget) );
    return inArray;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.insert;
  }

}());
