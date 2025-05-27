
import React from 'react';
import { Attack } from '@/data/mitreData';

interface AttackTooltipProps {
  attacks: Attack[];
  techniqueName: string;
  isVisible: boolean;
  position: { x: number; y: number };
}

const AttackTooltip: React.FC<AttackTooltipProps> = ({ attacks, techniqueName, isVisible, position }) => {
  if (!isVisible) return null;

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div
      className="absolute z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -100%)'
      }}
    >
      <div className="mb-3">
        <h3 className="font-semibold text-gray-900 text-sm mb-1">{techniqueName}</h3>
        <p className="text-xs text-gray-600">Total Attacks: {attacks.length}</p>
      </div>
      
      {attacks.length > 0 ? (
        <div className="space-y-3">
          {attacks.slice(0, 5).map((attack) => (
            <div key={attack.id} className="border-l-2 border-gray-200 pl-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-gray-900">{attack.user}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(attack.severity)}`}>
                  {attack.severity}
                </span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <div><span className="font-medium">Endpoint:</span> {attack.endpoint}</div>
                <div><span className="font-medium">Organization:</span> {attack.organization}</div>
                <div><span className="font-medium">Time:</span> {formatTimestamp(attack.timestamp)}</div>
              </div>
            </div>
          ))}
          {attacks.length > 5 && (
            <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-100">
              +{attacks.length - 5} more attacks
            </div>
          )}
        </div>
      ) : (
        <div className="text-xs text-gray-500 text-center py-2">
          No attacks detected for this technique
        </div>
      )}
    </div>
  );
};

export default AttackTooltip;
