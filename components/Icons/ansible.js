import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 300 300",
    }}
    viewBox="0 0 300 300"
    {...props}
  >
    <path d="M259.8 152.9c0 59-47.8 106.8-106.8 106.8S46.2 211.9 46.2 152.9 94 46.1 153 46.1s106.8 47.8 106.8 106.8" 
    style={{
        fill: "#20134b"
    }}
    />
    <path
      d="m154.8 112.9 27.6 68.2-41.7-32.9 14.1-35.3zm49.1 83.9L161.4 94.5c-1-2.8-3.7-4.6-6.6-4.5-3-.1-5.7 1.7-6.8 4.5l-46.7 112.2h16l18.5-46.3 55.1 44.5c2.2 1.8 3.8 2.6 5.9 2.6 4.2.1 7.7-3.2 7.8-7.4v-.2c0-1-.3-2.1-.7-3.1"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)
export default SvgComponent
