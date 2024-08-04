import React from 'react';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const stats = [
    { label: 'Total Orders', value: 75, change: 3, icon: <ArrowUpward /> },
    { label: 'Total Delivered', value: 70, change: 3, icon: <ArrowUpward /> },
    { label: 'Total Cancelled', value: 5, change: 3, icon: <ArrowDownward /> },
    { label: 'Total Revenue', value: '$12k', change: 3, icon: <ArrowDownward /> },
];

const Stats = () => {
    return (
        <div className="grid grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                    <div>
                        <h4 className="text-lg font-semibold">{stat.label}</h4>
                        <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className="flex items-center text-green-500">
                        {stat.icon}
                        <span className="ml-1">{stat.change}%</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Stats;