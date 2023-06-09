import { useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { easings } from '@react-spring/web'
import { Html, useProgress } from '@react-three/drei'
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import { BoxesLoader } from "react-awesome-loaders";

const LoadingComponent = () => {
  return (
    <BoxesLoader
      boxColor={"#6366F1"}
      style={{ marginBottom: "20px" }}
      desktopSize={"128px"}
      mobileSize={"80px"}
    />
  );
}

const LoadModel = () =>  {
  const { viewport } = useThree()
  // const gltf = useLoader(GLTFLoader, '/padel.glb');

  const gltf = useLoader(GLTFLoader, '/padel.glb', loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/gltf/');
    loader.setDRACOLoader(dracoLoader);
   })

   
  const [springs, api] = useSpring(
    () => ({
      scale: 1,
      rotation: [0, 0, 0],
      config: {
        easing: easings.steps(5),
        mass: 4,
        friction: 220
      }
    }),
    []
  );

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    api.start({
      rotation: [y / 25, -x / 18, 0]
    })
  })
  
  return (
    <animated.mesh
      style={springs}
      rotation={springs.rotation.to((x, y) => [x, y, 0])}
      >
      <primitive object={gltf.scene} />
    </animated.mesh>
  )
}
const Loader = () => {
  const { progress } = useProgress()
  return <Html center>
    <LoadingComponent />
  </Html>
}
const RenderModel = (props) => {
  return (
    <Canvas camera={{ position: [0, 3.2, 6.0] }} className={props.className}>
      <Suspense fallback={<Loader />}>
        <ambientLight color = {[0.078, 0.304 , 0.317]} />
        <pointLight position={[2, 3, 2]} />
        <LoadModel />
      </Suspense>
    </Canvas>
  )
}

export default RenderModel