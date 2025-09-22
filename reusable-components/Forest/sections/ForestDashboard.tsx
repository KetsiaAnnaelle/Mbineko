import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FileText, BarChart3, Map, Download, FileSpreadsheet, Calendar, TrendingUp, Leaf, Wind } from 'lucide-react';

// Données mockées
const biomassData = [
  { month: 'Fév', value: 2000 },
  { month: 'Mar', value: 2100 },
  { month: 'Mai', value: 2300 },
  { month: 'Jul', value: 2250 },
  { month: 'Sep', value: 2400 },
  { month: 'Nov', value: 2600 },
  { month: 'Jan', value: 2800 }
];

const co2Data = [
  { month: 'Jan', value: 1800 },
  { month: 'Fév', value: 1600 },
  { month: 'Mars', value: 1700 },
  { month: 'Avr', value: 1500 },
  { month: 'Mai', value: 1400 }
];

const environmentData = [
  { month: 'Jan', value: 78 },
  { month: 'Fév', value: 82 },
  { month: 'Mars', value: 85 },
  { month: 'Avr', value: 88 },
  { month: 'Mai', value: 91 }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="font-medium text-gray-800">{`${label}`}</p>
        <p className="text-emerald-600 font-semibold">
          {`${payload[0].value} ${payload[0].dataKey === 'value' ? (payload[0].value > 100 ? 'kg/m²' : '%') : ''}`}
        </p>
      </div>
    );
  }
  return null;
};

export default function ForestDashboard() {
  const [activeTab, setActiveTab] = useState('stats');
  const [selectedPeriod, setSelectedPeriod] = useState('6 mois');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
    { id: 'stats', label: 'Statistiques', icon: TrendingUp },
    { id: 'maps', label: 'Cartes', icon: Map }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/50">
      <div className="container mx-auto p-6 max-w-7xl">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                      activeTab === tab.id
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                        : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-emerald-600 shadow-sm border border-gray-200/50'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </div>
                    {activeTab === tab.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl opacity-90 -z-10" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all"
              >
                <option>6 mois</option>
                <option>1 an</option>
                <option>2 ans</option>
              </select>
              
              <div className="flex gap-2">
                <button className="group p-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
                  <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </button>
                <button className="group p-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                  <FileSpreadsheet className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Évolution de la biomasse */}
          <div className={`xl:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 transform transition-all duration-700 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 rounded-xl">
                <Leaf className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Évolution de la biomasse</h3>
              <div className="ml-auto px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                +12.5%
              </div>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={biomassData}>
                  <defs>
                    <linearGradient id="biomassGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    dx={-10}
                    domain={['dataMin - 200', 'dataMax + 200']}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#10b981"
                    strokeWidth={3}
                    fill="url(#biomassGradient)"
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Conditions Environnementales */}
          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 transform transition-all duration-700 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{animationDelay: '200ms'}}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-xl">
                <Wind className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Conditions Environnementales</h3>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={environmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    domain={[0, 100]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="value" 
                    fill="#3b82f6"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Absorption CO2 */}
        <div className={`mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 transform transition-all duration-700 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{animationDelay: '400ms'}}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 rounded-xl">
              <TrendingUp className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Absorption CO₂ (kg/mois)</h3>
            <div className="ml-auto px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              -22.2%
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={co2Data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  domain={['dataMin - 100', 'dataMax + 100']}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#f97316"
                  strokeWidth={3}
                  dot={{ fill: '#f97316', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#f97316', strokeWidth: 2, fill: '#fff' }}
                  animationDuration={2000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Biomasse totale', value: '2,847 kg/m²', change: '+12.5%', positive: true },
            { label: 'CO₂ absorbé', value: '1,420 kg', change: '-22.2%', positive: false },
            { label: 'Qualité environnementale', value: '91%', change: '+5.8%', positive: true },
            { label: 'Surface surveillée', value: '2,000 ha', change: '0%', positive: null }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 transform transition-all duration-500 hover:scale-105 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{animationDelay: `${600 + index * 100}ms`}}
            >
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              {stat.positive !== null && (
                <div className={`text-sm font-medium ${stat.positive ? 'text-emerald-600' : 'text-red-500'}`}>
                  {stat.change}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}