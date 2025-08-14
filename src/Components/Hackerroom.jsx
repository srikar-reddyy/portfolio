import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from './CanvasLoader';

const Model = () => { 
  const { scene } = useGLTF('/MOdel/My-model/scene.gltf'); // adjust path if needed
  return (
    <primitive
      object={scene}
      scale={0.2}
      position={[-2, 1, 0]} // shifted to the left and a bit higher
      rotation={[0, Math.PI / 6, 0]} // optional: slight turn toward center
    />
  );
};

const HackerRoom = () => {
  return (
    <Canvas shadows>
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 1.5, 4]} fov={50} />
        <ambientLight intensity={5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default HackerRoom;
