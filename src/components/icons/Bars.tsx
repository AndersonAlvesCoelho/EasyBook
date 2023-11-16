import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgProps {
  color: string;
  size: number;
  strokeWidth?: number;
}

const Bars = ({ color, strokeWidth = 1.5, size }: SvgProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        fill="currentColor"
        strokeWidth={strokeWidth}
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </Svg>
  );
};

export default Bars;
