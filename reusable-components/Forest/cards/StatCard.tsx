import { Card, CardContent } from '@/components/ui/card';
import { Thermometer, Droplets, CloudRain } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  color: string;
  icon: string;
}

const iconMap = {
  thermometer: Thermometer,
  droplets: Droplets,
  'cloud-rain': CloudRain,
};

export default function StatCard({ title, value, color, icon }: StatCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Thermometer;

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
          <div className={`p-3 rounded-lg ${color}`}>
            <IconComponent className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}