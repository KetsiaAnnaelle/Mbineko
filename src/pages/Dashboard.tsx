import React from 'react';
import Navbar from '../../reusable-components/Navbar';
import MapPanel from '../../reusable-components/dashboard/MapPanel';
import AlertsPanel from '../../reusable-components/dashboard/AlertsPanel';
import MetricsRow from '../../reusable-components/dashboard/MetricsRow';
import TrendsRow from '../../reusable-components/dashboard/TrendsRow';

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-dvh bg-neutral-50">
            <Navbar />
            <main className="mx-auto max-w-screen-2xl px-4 md:px-6 py-6 md:py-10 space-y-4">
                <div className="grid grid-cols-12 gap-4">
                    <MapPanel />
                    <AlertsPanel />
                </div>
                <MetricsRow />
                <TrendsRow />
            </main>
        </div>
    );
};

export default Dashboard;






