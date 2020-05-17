import React from "react"
import { useUpdate } from "react-three-fiber"
import * as THREE from "three"
import { animated } from "react-spring/three"

const Rectangle = props => {
  function getPoints() {
    const recShape = getRoundedRect(0, 0, 2.7, 2.7, 1)
    const points = recShape.getPoints()
    return points
  }

  function getRoundedRect(x, y, width, height, radius) {
    const ctx = new THREE.Shape()

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
  }

  const ref = useUpdate(
    geometry => {
      geometry.setFromPoints(getPoints())
      geometry.center()
    },
    [getPoints]
  )
  const color = `hsl(323, 56%, ${50 - Math.round(props.brightness)}%)`

  return (
    <>
      <bufferGeometry attach="geometry" ref={ref} />
      <animated.lineBasicMaterial attach="material" color={color} />
    </>
  )
}

export default Rectangle
