import React from 'react';
import Navbar from '../../reusable-components/Layout/Navbar';
import LineChart from '../../reusable-components/dashboard/LineChart';
import BarChart from '../../reusable-components/dashboard/BarChart';
import StatsCard from '../../reusable-components/dashboard/StatsCard';
import CircularProgress from '../../reusable-components/dashboard/CircularProgress';
import DonutChart from '../../reusable-components/dashboard/DonutChart';
import AlertsPanel from '../../reusable-components/dashboard/AlertsPanel';
import MapSection from '../../reusable-components/dashboard/MapSection';

function Dashboard() {
  const deforestationData = [10, 15, 25, 30, 45, 55, 70, 85, 90, 120];
  const forestEvolutionData = [45, 48, 52, 58, 62, 65, 68, 72, 75, 80];
  const riskZonesData = [20, 25, 30, 35, 28, 32, 40, 38, 35, 30];
  
  const incidentData = [
    { label: 'Wildfire', value: 40, color: '#EF4444' },
    { label: 'Illegal Logging', value: 35, color: '#F97316' },
    { label: 'Unauthorized', value: 25, color: '#EAB308' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex gap-6 p-6 mt-20">
        {/* Main Content */}
        <div className="flex-1 mt-10">
          {/* <MapSection /> */}
          <MapSection />
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            {/* Current Forest Cover */}
            <StatsCard title="Current Forest Cover">
              <div className="flex items-center justify-between">
                <CircularProgress percentage={72} color="#10B981" />
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-800">52%</div>
                  <div className="text-sm text-gray-500">Coverage</div>
                </div>
              </div>
            </StatsCard>

            {/* Deforested Area */}
            <StatsCard title="Deforested Area This M.">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-2">120 ha</div>
                <BarChart data={deforestationData} color="#10B981" />
              </div>
            </StatsCard>

            {/* Incidents by Type */}
            <StatsCard title="Incidents by Type">
              <div className="flex items-center justify-center">
                <DonutChart data={incidentData} />
              </div>
            </StatsCard>

            {/* AI Predictions */}
            <StatsCard title="AI Predictions">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-3">At Risk Zones</div>
                {/* <LineChart data={[40, 35, 30, 25, 30, 35, 40]} color="#EF4444" height={60} /> */}
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Current</span>
                  <span>Week</span>
                  <span>Weeks</span>
                  <span>Mth</span>
                </div>
              </div>
            </StatsCard>
          </div>

          {/* Second Row Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Forest Cover Evolution */}
            <StatsCard title="Forest Cover Evolution" className="lg:col-span-2">
              <div className="h-32">
                <LineChart data={forestEvolutionData} color="#10B981" height={80} />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>2018</span>
                  <span>2019</span>
                  <span>2022</span>
                  <span>2025</span>
                  <span>2023</span>
                </div>
              </div>
            </StatsCard>

            {/* At-Risk Zones & Remark */}
            <div className="space-y-6">
              <StatsCard title="At-Risk Zones">
                <BarChart data={riskZonesData} color="#F59E0B" maxHeight={40} />
              </StatsCard>
              
              <StatsCard title="Remark">
                <div className="text-sm text-gray-500 italic">
                  No remarks available
                </div>
              </StatsCard>
            </div>
          </div>
        </div>

        {/* Alerts Panel */}
        <div className="w-80 mt-10">
          <AlertsPanel />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

