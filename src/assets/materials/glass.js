import * as THREE from 'three';

export const glassMaterial = new THREE.MeshPhysicalMaterial();
glassMaterial.color = new THREE.Color("white");
glassMaterial.transmission = 0.9;
glassMaterial.roughness = 0;
glassMaterial.ior = 1.7;
glassMaterial.thickness = 0.5;

