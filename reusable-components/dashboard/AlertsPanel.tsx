import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const alerts = [
  { label: 'Wildfire', time: '4:84 AM', status: 'Detected', color: 'bg-red-500' },
  { label: 'Illegal Logging', time: '3:12 PM', status: 'Resolved', color: 'bg-orange-500' },
  { label: 'Unauthorized Entry', time: '1:29 AM', status: 'Detected', color: 'bg-amber-500' },
  { label: 'Illegal Logging', time: '12:39 AM', status: 'Detected', color: 'bg-orange-500' },
  { label: 'Wildfire', time: '8:19 AM', status: 'Witnessed', color: 'bg-red-500' },
];

const AlertsPanel: React.FC = () => {
  return (
    <Card className="col-span-12 lg:col-span-4">
      <CardContent className="p-0">
        <div className="p-4 border-b">
          <h3 className="font-semibold">Alerts</h3>
        </div>
        <ul className="p-2 divide-y">
          {alerts.map((a, i) => (
            <li key={i} className="flex items-center gap-3 px-2 py-3">
              <span className={`h-3 w-3 rounded-full ${a.color}`} />
              <div className="flex-1">
                <div className="text-sm font-medium">{a.label}</div>
                <div className="text-xs text-neutral-500">{a.status}</div>
              </div>
              <div className="text-xs text-neutral-500">{a.time}</div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;






