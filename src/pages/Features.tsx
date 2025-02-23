// FeaturesSection.tsx
import React from 'react';
import { Bot, Brain, GamepadIcon, LineChart } from 'lucide-react';
import * as THREE from 'three';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Assistant',
    description: 'Get instant support from our intelligent chatbot trained to understand and assist with dyslexia-related challenges.',
  },
  {
    icon: Brain,
    title: 'Dyslexia Screening',
    description: 'Comprehensive assessment tools to identify dyslexia patterns and create personalized learning paths.',
  },
  {
    icon: GamepadIcon,
    title: 'Interactive Learning',
    description: 'Engaging games and activities designed to make learning fun while improving reading and writing skills.',
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description: 'Monitor improvements with detailed analytics and progress reports tailored to individual goals.',
  }
];

export default function FeaturesSection() {
  const create3DCube = () => {
    // Function to create a rotating 3D cube
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(200, 200);
    document.getElementById('feature-cube')?.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Powerful Features for Better Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div id="feature-cube" onMouseEnter={create3DCube}></div>
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
