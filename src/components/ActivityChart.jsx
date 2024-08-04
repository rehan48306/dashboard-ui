import { KeyboardArrowDown } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
    { name: '5', uv: 5000 },
    { name: '9', uv: 10000 },
    { name: '11', uv: 5000 },
    { name: '13', uv: 4000 },
    { name: '15', uv: 6000 },
    { name: '17', uv: 6000 },
    { name: '19', uv: 5000 },
    { name: '21', uv: 5500 },
    { name: '23', uv: 1000 },
    { name: '25', uv: 7000 },
    { name: '27', uv: 8000 },
    { name: '29', uv: 1000 },
    { name: '31', uv: 6000 },
    { name: '33', uv: 11000 },
    { name: '35', uv: 16000 },
    { name: '37', uv: 10000 },
    { name: '39', uv: 8000 },
    { name: '41', uv: 5000 },
    { name: '43', uv: 6000 },
    { name: '45', uv: 11000 },
    { name: '47', uv: 8000 },
    { name: '49', uv: 6000 },

];
const ActivityChart = () => {
    return (
        <>
            <div className="p-4 bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-4 px-3">
                    <div className="text-xl font-bold text-white">Activity</div>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '#4A5568', color: '#fff', textTransform: 'none', padding: '8px 16px', minWidth: '100px' }}
                        endIcon={<KeyboardArrowDown />}
                    >
                        Weekly
                    </Button>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="0" stroke="#333" />
                        <XAxis dataKey="name" stroke="#fff" />
                        <YAxis stroke="#fff" />
                        <Bar
                            dataKey="uv"
                            fill="#8884d8"
                            barSize={30}
                            radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default ActivityChart;