type LogoType = {
  width: number;
  height: number;
};

const Logo = ({ width, height }: LogoType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 400"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.cls-1{fill:url(#linear-gradient);}`}</style>
        <linearGradient
          id="linear-gradient"
          x1="244.9665"
          y1="96.21565"
          x2="73.34781"
          y2="175.57053"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f7941d" />
          <stop offset="0.05183" stopColor="#ef891c" />
          <stop offset="0.22315" stopColor="#da681a" />
          <stop offset="0.40052" stopColor="#c94f19" />
          <stop offset="0.58428" stopColor="#bd3d18" />
          <stop offset="0.77837" stopColor="#b63217" />
          <stop offset="1" stopColor="#b42f17" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <circle cx="104.47038" cy="104.47038" r="104.47038" />
        <path
          className="cls-1"
          d="M187.8657,201.93286l-19.8291-24.48535a41.80273,41.80273,0,1,0-32.92627-76.12061V68.01684a72.27393,72.27393,0,0,1,52.75537,133.916ZM155.85887,43.66626a93.752,93.752,0,1,0,93.75195,93.75195A93.85814,93.85814,0,0,0,155.85887,43.66626ZM83.02244,137.41821A72.59735,72.59735,0,0,1,114.624,77.69311v66.2041h21.13868l-.45118-3.22656a20.527,20.527,0,0,1-.20117-2.82471,20.29284,20.29284,0,1,1,9.07276,16.83887l-4.40381-2.9292v23.3501l27.22509,33.62012a72.22742,72.22742,0,0,1-83.98193-71.30762Z"
          transform="translate(-51.38825 -32.94783)"
        />
      </g>
    </svg>
  );
};

export default Logo;
