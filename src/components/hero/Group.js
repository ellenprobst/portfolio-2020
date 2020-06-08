import React, { useEffect, useState } from "react"
import { useThree } from "react-three-fiber"
import Rectangle from "./rectangle"
import * as THREE from "three"
import { useTrail, animated, useTransition } from "react-spring/three"
const fast = { tension: 1200, friction: 40 }
const slow = { mass: 1, tension: 800, friction: 160 }

const enter = i => ({
  z: i * 0.08,
})
const from = i => ({
  z: -Math.pow(i * 0.45, 2),
})

const Group = ({ xy }) => {
  const { camera } = useThree()
  const [isMounted, setMount] = useState(false)
  const [trail, set] = useTrail(40, () => {
    return {
      config: i => (i === 0 ? fast : slow),
      from: {
        x: 0,
      },
    }
  })

  const transitions = useTransition([...Array(40).keys()].reverse(), null, {
    enter: enter,
    from: from,
    config: i => (i === 0 ? fast : slow),
    onRest: i => {
      i === 39 && setMount(true)
    },
  })

  useEffect(() => {
    if (isMounted) {
      const vector = new THREE.Vector3(xy[0], 0, 0.5)
      vector.unproject(camera)
      const dir = vector.sub(camera.position).normalize()
      const distance = -camera.position.z / dir.z
      const pos = camera.position.clone().add(dir.multiplyScalar(distance))

      set({ x: pos.x * 0.05 })
    }
  }, [xy, camera, isMounted, set])

  return (
    <group rotation={[0, -0.1, 0]} position-x={0.2}>
      {!isMounted &&
        transitions.map(({ item, key, props }, index) => {
          return (
            <animated.line
              position-x={0}
              position-y={0}
              position-z={props.z}
              rotation-z={(Math.PI / 40) * index}
              key={index}
            >
              <Rectangle brightness={index} opacity={props.opacity || 1} />
            </animated.line>
          )
        })}

      {isMounted &&
        trail.map((props, index) => {
          return (
            <animated.line
              position-x={props.x}
              position-y={0}
              position-z={(39 - index) * 0.08}
              rotation={[0, 0, (Math.PI / 40) * index]}
              key={index}
            >
              <Rectangle brightness={index} />
            </animated.line>
          )
        })}
    </group>
  )
}

export default Group
