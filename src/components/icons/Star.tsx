import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgProps {
  color: string;
  size: number;
  strokeWidth?: number;
  fill?: string;
}

const Star = ({ color, strokeWidth = 1.5, fill = 'currentColor', size }: SvgProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        fill={fill}
        strokeWidth={strokeWidth}
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </Svg>
  );
};

export default Star;