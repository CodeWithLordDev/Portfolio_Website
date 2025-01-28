// Model.jsx
import React, { useEffect, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
// Load the GLB model
const Model = () => {
    console.log("Processing");
     
    const { scene, animations } = useGLTF("assets/Model/tryglb16.glb"); 
    // Use the correct path to your model
    const { actions } = useAnimations(animations, scene);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (scene && actions) {
          setIsLoaded(true); // Model is loaded
        }
      }, [scene, actions]);

    console.log("actions are : ",actions)
    useEffect(() => {
    if (isLoaded) {
      const animationKeys = Object.keys(actions);
      console.log("Available Animations:", animationKeys);

      if (animationKeys.length > 0) {
        actions[animationKeys[0]]?.play(); // Play the first animation after model is loaded
      }
    }
  }, [isLoaded]);
    console.log("Processed");
    
    return <primitive object={scene} scale={1.5} />;
};

export default Model;
// src\assets\Model\finalModel2.glb