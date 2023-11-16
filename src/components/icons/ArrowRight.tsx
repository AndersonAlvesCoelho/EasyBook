import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SvgProps {
  color: string;
  size: number;
  strokeWidth?: number;
}

const ArrowRight = ({color, strokeWidth = 1.5, size}: SvgProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        fill="currentColor"
        strokeWidth={strokeWidth}
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </Svg>
  );
};


export default ArrowRight;
