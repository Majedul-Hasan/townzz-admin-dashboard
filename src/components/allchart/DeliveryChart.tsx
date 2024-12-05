
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactApexChart with ssr: false
const ReactApexChartNoSSR = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ApexOptions } from 'apexcharts'; // Import ApexOptions type

const ApexChart: React.FC = () => {
  // State for series
  const [series] = useState<number[]>([70]);

  // Define options with the correct type
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'radialBar', // Ensure type matches the literal type
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
      },
    },
    labels: ['Complete Event'],
    colors: ['#a503ad'],
  };

  return (
    <div className="w-[200px]">
      <div id="chart">
        {/* Use dynamically imported ReactApexChart component */}
        <ReactApexChartNoSSR options={options} series={series} type="radialBar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
