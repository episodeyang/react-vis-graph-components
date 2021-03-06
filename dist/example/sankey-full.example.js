'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sankey = require('../sankey');

var _sankey2 = _interopRequireDefault(_sankey);

var _rectangleNode = require('../blocks/rectangle-node');

var _rectangleNode2 = _interopRequireDefault(_rectangleNode);

var _blockAnchor = require('../blocks/block-anchor');

var _blockAnchor2 = _interopRequireDefault(_blockAnchor);

var _text = require('../blocks/text');

var _text2 = _interopRequireDefault(_text);

var _bezierConnector = require('../connectors/bezier-connector');

var _bezierConnector2 = _interopRequireDefault(_bezierConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NODES = [{ name: 'Energy' }, { name: 'Industrial Processes' }, { name: 'Electricity and heat' }, { name: 'Industry' }, { name: 'Land Use Change' }, { name: 'Agriculture' }, { name: 'Waste' }, { name: 'Transportation' }, { name: 'Other Fuel Combustion' }, { name: 'Fugitive Emissions' }, { name: 'Road' }, { name: 'Air' }, { name: 'Rail - Ship and Other Transport' }, { name: 'Residential Buildings' }, { name: 'Commercial Buildings' }, { name: 'Unallocated Fuel Combustion' }, { name: 'Iron and Steel' }, { name: 'Aluminium Non-Ferrous Metals' }, { name: 'Machinery' }, { name: 'Pulp - Paper and Printing' }, { name: 'Food and Tobacco' }, { name: 'Chemicals' }, { name: 'Cement' }, { name: 'Other Industry' }, { name: 'T and D Losses' }, { name: 'Coal Mining' }, { name: 'Oil and Gas Processing' }, { name: 'Deforestation' }, { name: 'Harvest \/ Management' }, { name: 'Agricultural Energy Use' }, { name: 'Agriculture Soils' }, { name: 'Livestock and Manure' }, { name: 'Rice Cultivation' }, { name: 'Other Agriculture' }, { name: 'Landfills' }, { name: 'Waste water - Other Waste' }, { name: 'Carbon Dioxide' }, { name: 'HFCs - PFCs' }, { name: 'Methane' }, { name: 'Nitrous Oxide' }];

var LINKS = [{ from: 'Agricultural Energy Use', to: 'Carbon Dioxide', value: '1.4' }, { from: 'Agriculture', to: 'Agriculture Soils', value: '5.2' }, { from: 'Agriculture', to: 'Livestock and Manure', value: '5.4' }, { from: 'Agriculture', to: 'Other Agriculture', value: '1.7' }, { from: 'Agriculture', to: 'Rice Cultivation', value: '1.5' }, { from: 'Agriculture Soils', to: 'Nitrous Oxide', value: '5.2' }, { from: 'Air', to: 'Carbon Dioxide', value: '1.7' }, { from: 'Aluminium Non-Ferrous Metals', to: 'Carbon Dioxide', value: '1.0' }, { from: 'Aluminium Non-Ferrous Metals', to: 'HFCs - PFCs', value: '0.2' }, { from: 'Cement', to: 'Carbon Dioxide', value: '5.0' }, { from: 'Chemicals', to: 'Carbon Dioxide', value: '3.4' }, { from: 'Chemicals', to: 'HFCs - PFCs', value: '0.5' }, { from: 'Chemicals', to: 'Nitrous Oxide', value: '0.2' }, { from: 'Coal Mining', to: 'Carbon Dioxide', value: '0.1' }, { from: 'Coal Mining', to: 'Methane', value: '1.2' }, { from: 'Commercial Buildings', to: 'Carbon Dioxide', value: '6.3' }, { from: 'Deforestation', to: 'Carbon Dioxide', value: '10.9' }, { from: 'Electricity and heat', to: 'Agricultural Energy Use', value: '0.4' }, {
  from: 'Electricity and heat', to: 'Aluminium Non-Ferrous Metals',
  value: '0.4'
}, { from: 'Electricity and heat', to: 'Cement', value: '0.3' }, { from: 'Electricity and heat', to: 'Chemicals', value: '1.3' }, { from: 'Electricity and heat', to: 'Commercial Buildings', value: '5.0' }, { from: 'Electricity and heat', to: 'Food and Tobacco', value: '0.5' }, { from: 'Electricity and heat', to: 'Iron and Steel', value: '1.0' }, { from: 'Electricity and heat', to: 'Machinery', value: '1.0' }, { from: 'Electricity and heat', to: 'Oil and Gas Processing', value: '0.4' }, { from: 'Electricity and heat', to: 'Other Industry', value: '2.7' }, { from: 'Electricity and heat', to: 'Pulp - Paper and Printing', value: '0.6' }, { from: 'Electricity and heat', to: 'Residential Buildings', value: '5.2' }, { from: 'Electricity and heat', to: 'T and D Losses', value: '2.2' }, {
  from: 'Electricity and heat', to: 'Unallocated Fuel Combustion',
  value: '2.0'
}, { from: 'Energy', to: 'Electricity and heat', value: '24.9' }, { from: 'Energy', to: 'Fugitive Emissions', value: '4.0' }, { from: 'Energy', to: 'Industry', value: '14.7' }, { from: 'Energy', to: 'Other Fuel Combustion', value: '8.6' }, { from: 'Energy', to: 'Transportation', value: '14.3' }, { from: 'Food and Tobacco', to: 'Carbon Dioxide', value: '1.0' }, { from: 'Fugitive Emissions', to: 'Coal Mining', value: '1.3' }, { from: 'Fugitive Emissions', to: 'Oil and Gas Processing', value: '3.2' }, { from: 'Harvest \/ Management', to: 'Carbon Dioxide', value: '1.3' }, {
  from: 'Industrial Processes',
  to: 'Aluminium Non-Ferrous Metals', value: '0.4'
}, { from: 'Industrial Processes', to: 'Cement', value: '2.8' }, { from: 'Industrial Processes', to: 'Chemicals', value: '1.4' }, { from: 'Industrial Processes', to: 'Other Industry', value: '0.5' }, { from: 'Industry', to: 'Aluminium Non-Ferrous Metals', value: '0.4' }, { from: 'Industry', to: 'Cement', value: '1.9' }, { from: 'Industry', to: 'Chemicals', value: '1.4' }, { from: 'Industry', to: 'Food and Tobacco', value: '0.5' }, { from: 'Industry', to: 'Iron and Steel', value: '3.0' }, { from: 'Industry', to: 'Oil and Gas Processing', value: '2.8' }, { from: 'Industry', to: 'Other Industry', value: '3.8' }, { from: 'Industry', to: 'Pulp - Paper and Printing', value: '0.5' }, { from: 'Iron and Steel', to: 'Carbon Dioxide', value: '4.0' }, { from: 'Land Use Change', to: 'Deforestation', value: '10.9' }, { from: 'Land Use Change', to: 'Harvest \/ Management', value: '1.3' }, { from: 'Landfills', to: 'Methane', value: '1.7' }, { from: 'Livestock and Manure', to: 'Methane', value: '5.1' }, { from: 'Livestock and Manure', to: 'Nitrous Oxide', value: '0.3' }, { from: 'Machinery', to: 'Carbon Dioxide', value: '1.0' }, { from: 'Oil and Gas Processing', to: 'Carbon Dioxide', value: '3.6' }, { from: 'Oil and Gas Processing', to: 'Methane', value: '2.8' }, { from: 'Other Agriculture', to: 'Methane', value: '1.4' }, { from: 'Other Agriculture', to: 'Nitrous Oxide', value: '0.3' }, { from: 'Other Fuel Combustion', to: 'Agricultural Energy Use', value: '1.0' }, { from: 'Other Fuel Combustion', to: 'Commercial Buildings', value: '1.3' }, { from: 'Other Fuel Combustion', to: 'Residential Buildings', value: '5.0' }, {
  from: 'Other Fuel Combustion',
  to: 'Unallocated Fuel Combustion', value: '1.8'
}, { from: 'Other Industry', to: 'Carbon Dioxide', value: '6.6' }, { from: 'Other Industry', to: 'HFCs - PFCs', value: '0.4' }, { from: 'Pulp - Paper and Printing', to: 'Carbon Dioxide', value: '1.1' }, { from: 'Rail - Ship and Other Transport', to: 'Carbon Dioxide', value: '2.5' }, { from: 'Residential Buildings', to: 'Carbon Dioxide', value: '10.2' }, { from: 'Rice Cultivation', to: 'Methane', value: '1.5' }, { from: 'Road', to: 'Carbon Dioxide', value: '10.5' }, { from: 'T and D Losses', to: 'Carbon Dioxide', value: '2.2' }, { from: 'Transportation', to: 'Air', value: '1.7' }, { from: 'Transportation', to: 'Rail - Ship and Other Transport', value: '2.5' }, { from: 'Transportation', to: 'Road', value: '10.5' }, { from: 'Unallocated Fuel Combustion', to: 'Carbon Dioxide', value: '3.0' }, { from: 'Unallocated Fuel Combustion', to: 'Methane', value: '0.4' }, { from: 'Unallocated Fuel Combustion', to: 'Nitrous Oxide', value: '0.4' }, { from: 'Waste', to: 'Landfills', value: '1.7' }, { from: 'Waste', to: 'Waste water - Other Waste', value: '1.5' }, { from: 'Waste water - Other Waste', to: 'Methane', value: '1.2' }, { from: 'Waste water - Other Waste', to: 'Nitrous Oxide', value: '0.3' }];

var SankeyDiagramExample = function (_Component) {
  _inherits(SankeyDiagramExample, _Component);

  function SankeyDiagramExample() {
    _classCallCheck(this, SankeyDiagramExample);

    return _possibleConstructorReturn(this, (SankeyDiagramExample.__proto__ || Object.getPrototypeOf(SankeyDiagramExample)).apply(this, arguments));
  }

  _createClass(SankeyDiagramExample, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ links: LINKS, nodes: NODES });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var links = _state.links;
      var nodes = _state.nodes;

      return _react2.default.createElement(
        _sankey2.default,
        { width: 1200, height: 650, columnSpacing: 250, blockSpacing: 10 },
        nodes.map(function (_ref) {
          var name = _ref.name;
          return _react2.default.createElement(
            _rectangleNode2.default,
            {
              name: name,
              key: name,
              width: 100,
              fill: 'white' },
            _react2.default.createElement(
              _blockAnchor2.default,
              {
                component: _text2.default,
                alignVertical: 'middle',
                dominantBaseline: 'middle',
                margin: 10 },
              name
            )
          );
        }),
        links.map(function (_ref2) {
          var from = _ref2.from;
          var to = _ref2.to;
          var value = _ref2.value;
          return _react2.default.createElement(_bezierConnector2.default, {
            key: from + '-' + to,
            from: from,
            to: to,
            width: value * 5,
            fill: 'rgba(0, 0, 0, 0.15)',
            color: 'rgba(24, 55, 55, 0.6)' });
        })
      );
    }
  }]);

  return SankeyDiagramExample;
}(_react.Component);

exports.default = SankeyDiagramExample;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NODES, 'NODES', 'src/example/sankey-full.example.js');

  __REACT_HOT_LOADER__.register(LINKS, 'LINKS', 'src/example/sankey-full.example.js');

  __REACT_HOT_LOADER__.register(SankeyDiagramExample, 'SankeyDiagramExample', 'src/example/sankey-full.example.js');
})();

;