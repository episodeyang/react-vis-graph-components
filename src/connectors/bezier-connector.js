import React, {PropTypes} from 'react';
import Bezier from 'bezier-js';
import NODE_TYPES from '../node-types';

const {arrayOf, oneOf} = PropTypes;
const propTypes = {
  points: arrayOf(oneOf(['square', 'cubic']))
};

const styleProps = {
  fill: 'transparent'
};

export default function BezierConnector({
  from,
  to,
  x1,
  y1,
  x2,
  y2,
  width = 20,
  bezierOffset = 30,
  stroke = 'black',
  strokeWidth = 0,
  ..._props
}) {

  const props = {
    ...styleProps,
    strokeWidth: 0,
    ..._props
  };

  const line = new Bezier(x1, y1, x1 + bezierOffset, y1, x2 - bezierOffset, y2, x2, y2);

  let d;
  try {
    d = line.outline(width / 2).curves.map(
      bezier => bezier.toSVG().replace('M', 'L')
    ).join(' ').replace(/^L/i, 'M');
  } catch (e) {
    // if points are degenerate, fall back on regular path
    return <path d={
    `M ${x1} ${y1 + width / 2} L ${x2} ${y2 + width / 2}
    L ${x2} ${y2 - width / 2} L ${x1} ${y1 - width / 2} Z`} {...props}/>
  }

  if (d) {
    return (
      <path {...props} d={d}/>
    );
  }
  return <path d="" {...props}/>
}

BezierConnector.graphNodeType = NODE_TYPES.LINK;
BezierConnector.propTypes = propTypes;