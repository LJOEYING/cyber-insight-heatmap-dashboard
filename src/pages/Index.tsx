
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import FilterPanel from '@/components/FilterPanel';
import MitreHeatmap from '@/components/MitreHeatmap';

const Index = () => {
  const [activeTab, setActiveTab] = useState('mitre');
  const [filters, setFilters] = useState({
    user: '',
    endpoint: '',
    timePeriod: '30days',
    organization: [],
    showSubTechniques: true,
    showMitigations: false,
    showEvents: true,
    showPotentialAttacks: false,
    showSuccessfulAttacks: true
  });

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dashboard</h2>
            <p className="text-gray-600">Dashboard content coming soon...</p>
          </div>
        );
      case 'assets':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Assets & Gaps</h2>
            <p className="text-gray-600">Assets & Gaps analysis coming soon...</p>
          </div>
        );
      case 'mitre':
        return (
          <>
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
            <MitreHeatmap filters={filters} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Index;
