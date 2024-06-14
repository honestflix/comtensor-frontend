import React from 'react';
import { Line } from 'react-chartjs-2';  
import { FaTimes } from 'react-icons/fa';  
import { Chart as ChartJS, LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend } from 'chart.js';  

ChartJS.register(LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend);  

interface UsageMetricsModalProps {
  isVisible: boolean; 
  chartData: {  
    labels: string[];
    datasets: { label: string; data: number[]; borderColor: string; backgroundColor: string }[];
  };
  onClose: () => void;
}

const UsageMetricsModal: React.FC<UsageMetricsModalProps> = ({
  isVisible,
  chartData,
  onClose
}) => {
  if (!isVisible) return null; 

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg w-2/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">API Usage Metrics</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800"> 
            <FaTimes />
          </button>
        </div>

        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: true },
              tooltip: { enabled: true },
            },
            scales: {
              x: {
                type: 'time',  
                time: { unit: 'hour' }, 
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default UsageMetricsModal;  
