import React, { useState } from "react"
import { Canvas } from "react-three-fiber"

import Group from "./Group"

const Hero = () => {
  const [xy, set] = useState([0, 0])

  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      resize={{ scroll: false }}
      style={{
        position: `absolute`,
      }}
      onMouseMove={e => {
        set([
          (e.clientX / window.innerWidth) * 2 - 1,
          (e.clientY / window.innerWidth) * 2 - 1,
        ])
      }}
    >
      <Group xy={xy} />
    </Canvas>
  )
}

export default Hero
