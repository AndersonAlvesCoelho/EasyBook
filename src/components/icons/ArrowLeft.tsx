import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SvgProps {
  color: string;
  size: number;
  strokeWidth?: number;
}

const ArrowLeft = ({color, strokeWidth = 1.5, size}: SvgProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        fill="currentColor"
        strokeWidth={strokeWidth}
        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
      />
    </Svg>
  );
};


export default ArrowLeft;
