import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import "./index.css";

import { OrbitControls } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
function App() {
  return (
    <Canvas flat camera={{ fov: 35 }}>
      <OrbitControls />
      <ambientLight />
      <Scene />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={6.0} // The bloom intensity.
          // blur kernel size
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          // Enables or disables mipmap blur.
          // The vertical resolution.
        />
        {/* your effects go here */}
        <ToneMapping adaptive />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
