import { useState } from 'react';
import HomePage from '../../reusable-components/Forest/pages/ForestPage';
import ForestDetailPage from '../../reusable-components/Forest/pages/ForestDetailPage';
import type { Forest } from '@/types/forest';

export default function ForestMonitoringPage() {
  const [selectedForest, setSelectedForest] = useState<Forest | null>(null);

  const handleForestSelect = (forest: Forest) => {
    setSelectedForest(forest);
  };

  const handleBackToHome = () => {
    setSelectedForest(null);
  };

  return (
    <div className="min-h-screen">
      {selectedForest ? (
        <ForestDetailPage 
          forest={selectedForest} 
          onBack={handleBackToHome} 
        />
      ) : (
        <HomePage onForestSelect={handleForestSelect} />
      )}
    </div>
  );
}