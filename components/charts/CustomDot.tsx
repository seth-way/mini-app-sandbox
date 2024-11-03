import React from "react";

const CustomDot = (props: any) => {
  const { cx, cy, height, width, team, xAxis, yAxis } = props;
  const [xMin, xMax] = getMinMax(xAxis.x, xAxis.width);
  const [yMin, yMax] = getMinMax(yAxis.y, yAxis.height);
  const dX = cx - width / 2;
  const dY = cy - height / 2;

  return (
    <g height={height} width={width} stroke="white" fill="blue" strokeWidth="3">
      {/* <circle cx={cx} cy={cy} r={height / 2} /> */}
      <image
        x={getPlacement(dX, xMin, xMax)}
        y={getPlacement(dY, yMin, yMax)}
        href={`/static/images/logos/${team}.png`}
        width={width}
        height={height}
      />
    </g>
  );

  function getMinMax(start: number, length: number) {
    return [start, start + length - height];
  }

  function getPlacement(target: number, min: number, max: number) {
    return target < min ? min : target > max ? max : target;
  }
};

export default CustomDot;
