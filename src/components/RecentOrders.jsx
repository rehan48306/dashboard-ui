import React from 'react';

const orders = [
    { customer: 'Wade Warren', orderNo: '1547856', amount: '$124.00', status: 'Pending' },
    { customer: 'Jane Cooper', orderNo: '4895676', amount: '$365.00', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '7896453', amount: '$46.68', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '2308672', amount: '$95.00', status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '9817602', amount: '$85.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '7851468', amount: '$128.20', status: 'Delivered' },
];

const RecentOrders = () => {
    return (
        <div className="p-4 bg-gray-800 rounded-lg shadow-md flex flex-wrap gap-4">
            <div className="text-xl font-bold">Recent Orders</div>
            <table className="min-w-full mt-4">
                <thead>
                    <tr>
                        <th className="py-2 text-left">Customer</th>
                        <th className="py-2 text-left">Order No</th>
                        <th className="py-2 text-left">Amount</th>
                        <th className="py-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index} className="border-t border-gray-700">
                            <td className="py-2">{order.customer}</td>
                            <td className="py-2">{order.orderNo}</td>
                            <td className="py-2">{order.amount}</td>
                            <td className="py-2">
                                <span
                                    className={`inline-block px-2 py-1 rounded-full text-sm ${order.status === 'Pending'
                                        ? 'bg-yellow-500 text-white'
                                        : order.status === 'Delivered'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-red-500 text-white'
                                        }`}
                                >
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecentOrders;
