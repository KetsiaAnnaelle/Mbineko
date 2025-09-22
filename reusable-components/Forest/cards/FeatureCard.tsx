import { Card, CardContent } from "@/components/ui/card";
import { Map, BarChart3, User } from "lucide-react";
import type { Feature } from "@/types/forest";
import { motion } from "framer-motion";

interface FeatureCardProps {
  feature: Feature;
}

const iconMap = {
  map: Map,
  analytics: BarChart3,
  user: User,
};

export default function FeatureCard({ feature }: FeatureCardProps) {
  const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Map;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="w-full sm:w-80"
    >
      <Card className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
        <CardContent className="p-8 flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-inner mb-6">
            <IconComponent className="h-10 w-10 text-green-600" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
