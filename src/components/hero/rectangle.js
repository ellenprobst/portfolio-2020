import React, { useMemo } from "react"
import { useUpdate } from "react-three-fiber"
import * as THREE from "three"
import { animated } from "react-spring/three"

const Rectangle = ({ x = 0, y = 0, width = 2.7, height = 2.7, ...props }) => {
  const getRoundedRect = useMemo(() => {
    const ctx = new THREE.Shape()
    const radius = 1
    ctx.moveTo(x, y + radius)
    ctx.lineTo(x, y + height - radius)
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height)
    ctx.lineTo(x + width - radius, y + height)
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
    ctx.lineTo(x + width, y + radius)
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y)
    ctx.lineTo(x + radius, y)
    ctx.quadraticCurveTo(x, y, x, y + radius)

    return ctx
  }, [x, y, width, height])

  const ref = useUpdate(
    geometry => {
      geometry.setFromPoints(getRoundedRect.getPoints())
      geometry.center()
    },
    [getRoundedRect]
  )
  const color = `hsl(323, 56%, ${70 - Math.round(props.brightness)}%)`

  return (
    <>
      <bufferGeometry attach="geometry" ref={ref} />
      <animated.lineBasicMaterial attach="material" color={color} />
    </>
  )
}

export default Rectangle
