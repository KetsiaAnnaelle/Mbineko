// import Header from '../../reusable-components/Layout/Header';
// import Footer from '../../reusable-components/Layout/Footer';
// import { Suspense, useEffect, useMemo, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Float, Environment, useTexture } from '@react-three/drei';
// import { motion, AnimatePresence } from 'framer-motion';
// import { getAvailableForestImages } from '@/services/imageSource';

// function Billboard({ url, position, onClick }: { url: string, position: [number, number, number], onClick?: () => void }) {
//   const texture = useTexture(url);
//   return (
//     <Float floatIntensity={0.8} rotationIntensity={0.2} speed={1.2}>
//       <mesh position={position} onClick={onClick} className="cursor-pointer">
//         <planeGeometry args={[3.0, 1.7]} />
//         <meshStandardMaterial map={texture} roughness={0.9} metalness={0.1} />
//       </mesh>
//     </Float>
//   );
// }

// import ErrorBoundary from '@/components/ErrorBoundary';

// export default function Cartography3D() {
//   const [images, setImages] = useState<string[]>([]);
//   const [active, setActive] = useState<string | null>(null);

//   useEffect(() => {
//     getAvailableForestImages().then(setImages);
//   }, []);

//   const positions = useMemo<([number, number, number])[]>(() => (
//     [
//       [-3.2, 1.0, -2.2],
//       [0, 1.2, -3.6],
//       [3.2, 1.0, -2.2],
//       [0, 0.8, -1.2],
//     ]
//   ), []);

//   return (
//     <div className="min-h-screen bg-white text-gray-900">
//       <Header />
//       <main className="max-w-screen-2xl mx-auto px-4 md:px-6 py-8 md:py-12">
//         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//           <h1 className="text-3xl md:text-4xl font-bold mb-2">Cartographie 3D</h1>
//           <p className="text-gray-600 mb-6">Galerie 3D interactive des vues de la forêt. Cliquez sur une image pour l’agrandir.</p>
//         </motion.div>

//         <ErrorBoundary>
//           <div className="w-full h-[60vh] rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative">
//             <Suspense fallback={<div className="w-full h-full grid place-items-center">Chargement 3D…</div>}>
//               <Canvas camera={{ position: [0, 1.6, 5.2], fov: 55 }}>
//                 <ambientLight intensity={0.6} />
//                 <directionalLight position={[3, 4, 2]} intensity={1} />
//                 <Environment preset="forest" />
//                 {images.slice(0, 4).map((url, i) => (
//                   <Billboard key={url} url={url} position={positions[i] || [i * 2 - 2, 1, -2]} onClick={() => setActive(url)} />
//                 ))}
//                 <OrbitControls enableDamping dampingFactor={0.08} />
//               </Canvas>
//             </Suspense>
          
//           <AnimatePresence>
//             {active && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/70 grid place-items-center p-6"
//                 onClick={() => setActive(null)}
//               >
//                 <motion.img
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0.95, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   src={active}
//                   alt="Agrandissement"
//                   className="max-h-full max-w-full rounded-xl shadow-2xl"
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>
//           </div>
//         </ErrorBoundary>

//         <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-3">
//           {images.slice(0, 6).map((url) => (
//             <motion.button
//               key={url}
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => setActive(url)}
//               className="aspect-video overflow-hidden rounded-lg border border-gray-200 shadow-sm"
//             >
//               <img src={url} alt="aperçu" className="w-full h-full object-cover" />
//             </motion.button>
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }


import { Suspense, useEffect, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, useTexture } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { getAvailableForestImages } from '../services/imageSource';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../../reusable-components/Layout/Header';
import Footer from '../../reusable-components/Layout/Footer';


function Billboard({ url, position, onClick }: { url: string, position: [number, number, number], onClick?: () => void }) {
  const texture = useTexture(url);
  return (
    <Float floatIntensity={0.8} rotationIntensity={0.2} speed={1.2}>
      <mesh position={position} onClick={onClick} className="cursor-pointer">
        <planeGeometry args={[3.0, 1.7]} />
        <meshStandardMaterial map={texture} roughness={0.9} metalness={0.1} />
      </mesh>
    </Float>
  );
}

export default function Cartography3D() {
  const [images, setImages] = useState<string[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAvailableForestImages()
      .then(setImages)
      .finally(() => setLoading(false));
  }, []);

  const positions = useMemo<([number, number, number])[]>(() => (
    [
      [-3.2, 1.0, -2.2],
      [0, 1.2, -3.6],
      [3.2, 1.0, -2.2],
      [0, 0.8, -1.2],
    ]
  ), []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des images de la forêt...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Cartographie 3D</h1>
          <p className="text-gray-600 mb-6">
            Galerie 3D interactive des vues de la forêt. Cliquez sur une image pour l'agrandir.
          </p>
        </motion.div>

        <ErrorBoundary>
          <div className="w-full h-[60vh] rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative">
            <Suspense fallback={
              <div className="w-full h-full grid place-items-center bg-gray-50">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-2"></div>
                  <p className="text-gray-600">Chargement 3D…</p>
                </div>
              </div>
            }>
              <Canvas camera={{ position: [0, 1.6, 5.2], fov: 55 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[3, 4, 2]} intensity={1} />
                <Environment preset="forest" />
                {images.slice(0, 4).map((url, i) => (
                  <Billboard 
                    key={url} 
                    url={url} 
                    position={positions[i] || [i * 2 - 2, 1, -2]} 
                    onClick={() => setActive(url)} 
                  />
                ))}
                <OrbitControls enableDamping dampingFactor={0.08} />
              </Canvas>
            </Suspense>
          
            <AnimatePresence>
              {active && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/70 grid place-items-center p-6 z-10"
                  onClick={() => setActive(null)}
                >
                  <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={active}
                    alt="Agrandissement"
                    className="max-h-full max-w-full rounded-xl shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ErrorBoundary>

        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-3">
          {images.slice(0, 6).map((url) => (
            <motion.button
              key={url}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActive(url)}
              className="aspect-video overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={url} alt="aperçu" className="w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}