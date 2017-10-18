'use strict';

var helpers = require('../helpers');

module.exports = {
  'name': 'ce-newline-before-closing-brace',
  'defaults': {
    'include': true
  },
  'detect': function (ast, parser) {
    var result = [];
      ast.traverseByTypes(['block'], function (block, i, parent) {
        var previous = false,
            whitespace,
            warn = {},
            last = block.content[block.content.length-1];

       if( last.content !== '\n' ){
        result = helpers.addUnique(result, {
              'ruleId': parser.rule.name,
              'line': last.start.line,
              'column': last.start.column,
              'message': 'there should be only one newline at the end of the block',
              'severity': parser.severity
            });
      }
    });
    
    return result;
  }
};
