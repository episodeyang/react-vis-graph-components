/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";
import LinkGraph from './LinkGraph';
import Arrow from './Arrow';
import CircleNode from './blocks/CircleNode';
import StraightConnector from './connectors/StraigntConnector';

const NODES = [
  {x: 100, y: 50, key: 'batman'},
  {x: 140, y: 80, key: 'superman'},
  {x: 175, y: 130, key: 'antman'},
  {x: 110, y: 120, key: 'manman'}
];

const LINKS = [
  {from: 'batman', to: 'superman'},
  {from: 'superman', to: 'antman'},
  {from: 'antman', to: 'manman'},
];

// stages
// links
// 1. display stages with x, y, and z
// 2. display connections between them

export default class HappySandwichMakerExample extends Component {
  componentWillMount() {
    this.setState({links: LINKS, nodes: NODES});
  }

  render() {
    const {links, nodes} = this.state;
    return (
      <LinkGraph width="200" height="200">
        <defs>
          <Arrow id="arrow" width="10" height="10"/>
        </defs>
        {nodes.map(({x, y, key})=>(
          <CircleNode name={key} key={key} x={x} y={y} r={10}
                      nodeType="node"
                      stroke="black" strokeWidth="0" fill="red"/>
        ))}
        {links.map(({from, to, strokeWidth = 1, paddingEnd = 5})=>(
          <StraightConnector from={from}
                             to={to}
                             key={`${from}-${to}`}
                             name={`${from}-${to}`}
                             nodeType="link"
                             strokeWidth={strokeWidth}
                             color="rgba(24, 55, 55, 0.6)"
                             paddingStart={2}
                             paddingEnd={paddingEnd}
                             markerEndId="arrow"/>
        ))}
      </LinkGraph>
    );
  }
}

