'use client';

import { useState } from "react";
import DeliveryChart from "@/components/allchart/DeliveryChart";
import LineChart from "@/components/allchart/LineChart";

export default function DashboardOverview() {
  const [selectedValue, setSelectedValue] = useState<string>('this-month');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="pt-8 pb-32 lg:px-0 px-3">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 justify-between">
          {/* Card 1 */}
          <div className="w-full bg-white rounded-lg shadow-md">
            <div className="relative p-6 border-2 rounded-xl">
              <div className="space-y-4 font-poppins">
                <h3 className="text-xl font-medium text-gray-900">Total Event Created</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-bold tracking-tight">320</span>
                  <span className="text-lg text-gray-500">Events</span>
                </div>
                <p className="text-base text-gray-600">Total 10 services are featured</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-white rounded-lg shadow-md">
            <div className="relative p-6 border-2 rounded-xl">
              <div className="space-y-4 font-poppins">
                <h3 className="text-xl font-medium text-gray-900">Total Completed Event</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-bold tracking-tight">580</span>
                  <span className="text-lg text-gray-500">Events</span>
                </div>
                <p className="text-base text-gray-600">Across all categories</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-white rounded-lg shadow-md">
            <div className="relative p-6 border-2 rounded-xl">
              <div className="space-y-4 font-poppins">
                <h3 className="text-xl font-medium text-gray-900">Total Pending Event</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-bold tracking-tight">150</span>
                  <span className="text-lg text-gray-500">Events</span>
                </div>
                <p className="text-base text-gray-600">Events waiting for approval</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mt-8">
          <DeliveryChart />
        </div>
        <div className="mt-8">
          <LineChart />
        </div>
      </div>
    </div>
  );
}
