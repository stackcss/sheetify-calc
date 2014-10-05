/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var sheetify = require('sheetify');
var calc = require('../index');
var fs = require('fs');

/**
 * Test
 */

describe('sheetify-calc', function() {
  it('should transform simple calc', function(done) {
    var expects = fs.readFileSync(__dirname + '/fixtures/simple-out.css', 'utf-8').trim();

    sheetify(__dirname + '/fixtures/simple-in.css')
      .transform(calc())
      .bundle(function(err, body) {
        (err === null).should.be.true;
        String(expects).should.eql(body.trim());
        done();
      });
  });

  it('should use fallbacks', function(done) {
    var expects = fs.readFileSync(__dirname + '/fixtures/fallback-out.css', 'utf-8').trim();

    sheetify(__dirname + '/fixtures/fallback-in.css')
      .transform(calc())
      .bundle(function(err, body) {
        (err === null).should.be.true;
        String(expects).should.eql(body.trim());
        done();
      });
  });
});
