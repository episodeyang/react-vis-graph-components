'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Readme;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdownit = require('react-markdownit');

var _reactMarkdownit2 = _interopRequireDefault(_reactMarkdownit);

var _reactHighlight = require('@episodeyang/react-highlight.js');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _reactComponentPropsTable = require('react-component-props-table');

var _reactComponentPropsTable2 = _interopRequireDefault(_reactComponentPropsTable);

var _linkGraphSimple = require('./link-graph-simple.example');

var _linkGraphSimple2 = _interopRequireDefault(_linkGraphSimple);

var _linkGraph = require('!!react-docgen!../link-graph');

var _linkGraph2 = _interopRequireDefault(_linkGraph);

var _linkGraphSimpleExample = require('!!raw!./link-graph-simple.example.js');

var _linkGraphSimpleExample2 = _interopRequireDefault(_linkGraphSimpleExample);

var _sankeySimple = require('./sankey-simple.example');

var _sankeySimple2 = _interopRequireDefault(_sankeySimple);

var _sankey = require('!!react-docgen!../sankey');

var _sankey2 = _interopRequireDefault(_sankey);

var _sankeySimpleExample = require('!!raw!./sankey-simple.example.js');

var _sankeySimpleExample2 = _interopRequireDefault(_sankeySimpleExample);

var _sankeyFull = require('./sankey-full.example');

var _sankeyFull2 = _interopRequireDefault(_sankeyFull);

var _sankeyFullExample = require('!!raw!./sankey-full.example.js');

var _sankeyFullExample2 = _interopRequireDefault(_sankeyFullExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function Readme(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react2.default.createElement(
    _reactMarkdownit2.default,
    { stripIndent: true },
    '\n      # React Vis Graph Component: Link Graph and Sankey Diagram\n\n      ## Linked Node Graph\n\n      [![github](https://img.shields.io/github/downloads/episodeyang/' + 'react-vis-graph-components/total.svg?style=flat-square&maxAge=2592000)]()\n\n      This component allows you to draw a linked node graph easily.\n      The graph component takes in the children (links and nodes) and\n      automatically calculates the end points for the connections and\n      adds padding.\n      ',
    _react2.default.createElement(_linkGraphSimple2.default, null),
    '\n      ### Usage Example\n\n      The source code below of the example above is loaded using the\n      webpack raw loader.',
    _react2.default.createElement(_reactComponentPropsTable2.default, { propMetaData: _linkGraph2.default.props }),
    _react2.default.createElement(
      _reactHighlight2.default,
      null,
      _linkGraphSimpleExample2.default
    ),
    '\n\n      ## Sankey Diagram\n\n      ',
    _react2.default.createElement(_sankeySimple2.default, null),
    '\n      ### Simple Usage example\n\n      The source code below of the example above is loaded using the\n      webpack raw loader.',
    _react2.default.createElement(_reactComponentPropsTable2.default, { propMetaData: _sankey2.default.props }),
    _react2.default.createElement(
      _reactHighlight2.default,
      null,
      _sankeySimpleExample2.default
    ),
    '\n      ### A More Sophisticated Sankey Example\n\n      ',
    _react2.default.createElement(_sankeyFull2.default, null),
    _react2.default.createElement(
      _reactHighlight2.default,
      null,
      _sankeyFullExample2.default
    ),
    '\n\n\n      ## Develop\n\n      1. First make your changes, then git commit. Use `serve-docs`\n       to view live update at [http://localhost:5000](http://localhost:5000).\n      2. run `build-docs`, `build-static-docs`, `gh-pages`\n      3. Then remember to push to master.\n\n      '
  );
}
// ### Props
// {`This table below is generated automatically`}
// <div className='table-container horizontal-scroll flex-column center'>
//   <PropsTable propMetaData={HappySandwichMakerAST.props}/>
// </div>

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Readme, 'Readme', 'src/example/Readme.js');
})();

;