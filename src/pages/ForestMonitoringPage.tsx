import { useState } from 'react';
import ForestDetailPage from '../../reusable-components/Forest/pages/ForestDetailPage';
import type { Forest } from '@/types/forest';
import ForestPage from '../../reusable-components/Forest/pages/ForestPage';

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
        <ForestPage onForestSelect={handleForestSelect} />
      )}
    </div>
  );
}