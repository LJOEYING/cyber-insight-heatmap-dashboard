
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterPanelProps {
  filters: {
    user: string;
    endpoint: string;
    timePeriod: string;
    organization: string[];
    showSubTechniques: boolean;
    showMitigations: boolean;
    showEvents: boolean;
    showPotentialAttacks: boolean;
    showSuccessfulAttacks: boolean;
  };
  onFilterChange: (key: string, value: any) => void;
  totalAttacks: number;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange, totalAttacks }) => {
  const toggles = [
    { key: 'showSubTechniques', label: 'Show Sub-Techniques' },
    { key: 'showMitigations', label: 'Show with Mitigations Available' },
    { key: 'showEvents', label: 'Show with Events' },
    { key: 'showPotentialAttacks', label: 'Show with Potential Attacks' },
    { key: 'showSuccessfulAttacks', label: 'Show with Successful Attacks' }
  ];

  const handleOrganizationChange = (value: string) => {
    if (value === '') {
      onFilterChange('organization', []);
    } else {
      const currentOrgs = filters.organization;
      if (currentOrgs.includes(value)) {
        onFilterChange('organization', currentOrgs.filter(org => org !== value));
      } else {
        onFilterChange('organization', [...currentOrgs, value]);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by User</label>
          <input
            type="text"
            value={filters.user}
            onChange={(e) => onFilterChange('user', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter user"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Endpoint</label>
          <input
            type="text"
            value={filters.endpoint}
            onChange={(e) => onFilterChange('endpoint', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter endpoint"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
          <div className="relative">
            <select
              value={filters.timePeriod}
              onChange={(e) => onFilterChange('timePeriod', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
          <div className="relative">
            <select
              value=""
              onChange={(e) => handleOrganizationChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="">Select organization</option>
              <option value="operations">Operations</option>
              <option value="ipac">IPAC</option>
              <option value="emea">EMEA</option>
              <option value="apac">APAC</option>
              <option value="americas">Americas</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
          {filters.organization.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {filters.organization.map((org) => (
                <span
                  key={org}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {org}
                  <button
                    onClick={() => handleOrganizationChange(org)}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Total Attacks</label>
          <div className="bg-blue-600 text-white px-4 py-2 rounded-md text-center font-semibold">
            {totalAttacks.toLocaleString()}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {toggles.map((toggle) => (
          <label key={toggle.key} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters[toggle.key as keyof typeof filters] as boolean}
              onChange={(e) => onFilterChange(toggle.key, e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{toggle.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
