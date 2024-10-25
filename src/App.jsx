import "./App.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Line, OrbitControls, TransformControls } from "@react-three/drei";
import * as THREE from "three";

const Structure = ({ nodes, members }) => {
  return (
    <>
      {members.map((member, index) => {
        const startNode = nodes[member.start];
        const endNode = nodes[member.end];

        return (
          <React.Fragment key={index}>
            <Line
              points={[
                [startNode.x, startNode.y, startNode.z],
                [endNode.x, endNode.y, endNode.z],
              ]}
              color="white"
              lineWidth={3}
            />

            <mesh position={[startNode.x, startNode.y, startNode.z]}>
              <sphereGeometry args={[0.7, 64, 64]} />
              <meshBasicMaterial color="red" />
            </mesh>

            <mesh position={[endNode.x, endNode.y, endNode.z]}>
              <sphereGeometry args={[0.7, 64, 64]} />
              <meshBasicMaterial color="red" />
            </mesh>
          </React.Fragment>
        );
      })}

      {[28, 29, 30].map((nodeIndex) => {
        const node = nodes[nodeIndex];
        return (
          <mesh position={[node.x, node.y, node.z]} key={nodeIndex}>
            <boxGeometry args={[8, 4, 8]} />
            <meshBasicMaterial color="cyan" />
          </mesh>
        );
      })}
    </>
  );
};

const App = () => {
  const nodes = {
    1: new THREE.Vector3(-8.7036, 0.0, 49.0748),
    2: new THREE.Vector3(-72.9996, 0.0, 49.0748),
    3: new THREE.Vector3(-75.0, 0.0, 49.0748),
    4: new THREE.Vector3(-75.9996, 0.0, 43.8788),
    5: new THREE.Vector3(-78.9996, 0.0, 38.6828),
    6: new THREE.Vector3(-44.8512, 0.0, -13.5364),
    7: new THREE.Vector3(-46.8516, 0.0, -16.9996),
    8: new THREE.Vector3(-10.704, 0.0, 45.6104),
    9: new THREE.Vector3(-80.0004, 0.0, 40.4144),
    10: new THREE.Vector3(-38.148, 0.0, -32.0752),
    11: new THREE.Vector3(-34.1484, 0.0, -32.0752),
    12: new THREE.Vector3(-6.0, 0.0, -87.7576),
    13: new THREE.Vector3(-5.0004, 0.0, -89.4892),
    14: new THREE.Vector3(8.7036, 0.0, 49.0748),
    15: new THREE.Vector3(72.9996, 0.0, 49.0748),
    16: new THREE.Vector3(75.0, 0.0, 49.0748),
    17: new THREE.Vector3(75.9996, 0.0, 43.8788),
    18: new THREE.Vector3(78.9996, 0.0, 38.6828),
    19: new THREE.Vector3(44.8512, 0.0, -13.5364),
    20: new THREE.Vector3(46.8516, 0.0, -16.9996),
    21: new THREE.Vector3(10.704, 0.0, 45.6104),
    22: new THREE.Vector3(80.0004, 0.0, 40.4144),
    23: new THREE.Vector3(38.148, 0.0, -32.0752),
    24: new THREE.Vector3(34.1484, 0.0, -32.0752),
    25: new THREE.Vector3(6.0, 0.0, -87.7576),
    26: new THREE.Vector3(5.0004, 0.0, -89.4892),
    27: new THREE.Vector3(0.0, 0.0, -87.7576),
    28: new THREE.Vector3(11.3127, 0.0, 6.5311),
    29: new THREE.Vector3(0.0, 0.0, -13.0622),
    30: new THREE.Vector3(-11.3127, 0.0, 6.5311),
    31: new THREE.Vector3(-77.4996, 0.0, 41.2808),
    32: new THREE.Vector3(-74.4996, 0.0, 46.4768),
    33: new THREE.Vector3(-64.0097, 60.0, 18.6311),
    34: new THREE.Vector3(-64.0097, -12.0, 18.6311),
    35: new THREE.Vector3(18.5003, 60.0, -66.1068),
    36: new THREE.Vector3(18.5003, -12.0, -66.1068),
    37: new THREE.Vector3(54.5003, 60.0, -3.753),
    38: new THREE.Vector3(54.5003, -12.0, -3.753),
    39: new THREE.Vector3(72.0203, 60.0, 26.5926),
    40: new THREE.Vector3(72.0203, -12.0, 26.5926),
    41: new THREE.Vector3(-24.1573, 60.0, 45.7931),
    42: new THREE.Vector3(-24.1573, -36.0, 45.7931),
    43: new THREE.Vector3(-59.178, 60.0, 46.2687),
    44: new THREE.Vector3(-59.178, -12.0, 46.2687),
  };

  const members = [
    { start: 4, end: 30 },
    { start: 32, end: 8 },
    { start: 31, end: 6 },
    { start: 7, end: 1 },
    { start: 17, end: 28 },
    { start: 17, end: 21 },
    { start: 17, end: 19 },
    { start: 20, end: 14 },
    { start: 3, end: 16 },
    { start: 9, end: 13 },
    { start: 26, end: 22 },
    { start: 29, end: 27 },
    { start: 10, end: 23 },
    { start: 24, end: 27 },
    { start: 11, end: 27 },
    { start: 5, end: 2 },
    { start: 15, end: 18 },
    { start: 25, end: 12 },
    { start: 33, end: 34 },
    { start: 35, end: 36 },
    { start: 37, end: 38 },
    { start: 39, end: 40 },
    { start: 41, end: 42 },
    { start: 43, end: 44 },
  ];

  return (
    <>
     
      <Canvas camera={{ position: [250, 250, 200], fov: 40 }}>
        <TransformControls mode="translate">
          <directionalLight position={[0, 0, 200]} />
          <ambientLight intensity={0.5} />
          <Structure nodes={nodes} members={members} />
          <OrbitControls />
        </TransformControls>
      </Canvas>
    </>
  );
};

export default App;
