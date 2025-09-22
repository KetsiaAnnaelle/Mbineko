interface ProgressCardProps {
  label: string;
  value: number;
  color: string;
}

export default function ProgressCard({ label, value, color }: ProgressCardProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-semibold text-gray-900">{value}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${color}`}
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}