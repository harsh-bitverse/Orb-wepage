"use client";

import { Canvas } from "@react-three/fiber";

export default function Home(){
  return (
    <main style = {{width : "100vw", height : "100vh"}}>
      <Canvas camera = {{position : [0, 50, 0]}}>
        <ambientLight intensity = {1}/>

        <mesh rotation = {[1.5, 0, 0]}>
          <sphereGeometry args = {[1, 128, 128]}/>
          <meshStandardMaterial color = "white"/>
        </mesh>
      </Canvas>
    </main>
  );
}