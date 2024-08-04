import { ArrowDownward, ArrowUpward, AttachMoney, Cancel, LocalShipping, ShoppingCart } from "@mui/icons-material"

const Cart = () => {
    return (
        <div className="flex flex-wrap gap-4 min-h-[180px]">
            <div className="p-4 bg-gray-800 rounded-lg shadow-md flex flex-col" style={{ flex: '1 1 22%', minWidth: '0' }}>
                <div className="flex items-center justify-between mb-2">
                    <ShoppingCart className="text-blue-400 bg-blue-400 bg-opacity-20 rounded-full p-2" style={{ fontSize: 40 }} />
                </div>
                <div className="text-lg font-medium text-left">Total Orders</div>
                <div className="flex items-center justify-between mt-2">
                    <div className="text-3xl font-bold">75</div>
                    <div className="flex items-center">
                        <ArrowUpward className="text-green-400" />
                        <span className="text-green-400 ml-1">3%</span>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-md flex flex-col" style={{ flex: '1 1 22%', minWidth: '0' }}>
                <div className="flex items-center justify-between mb-2">
                    <LocalShipping className="text-green-400 bg-green-400 bg-opacity-20 rounded-full p-2" style={{ fontSize: 40 }} />
                </div>
                <div className="text-lg font-medium text-left">Total Delivered</div>
                <div className="flex items-center justify-between mt-2">
                    <div className="text-3xl font-bold">70</div>
                    <div className="flex items-center">
                        <ArrowUpward className="text-green-400" />
                        <span className="text-green-400 ml-1">3%</span>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-md flex flex-col" style={{ flex: '1 1 22%', minWidth: '0' }}>
                <div className="flex items-center justify-between mb-2">
                    <Cancel className="text-red-400 bg-red-400 bg-opacity-20 rounded-full p-2" style={{ fontSize: 40 }} />
                </div>
                <div className="text-lg font-medium text-left">Total Cancelled</div>
                <div className="flex items-center justify-between mt-2">
                    <div className="text-3xl font-bold">5</div>
                    <div className="flex items-center">
                        <ArrowDownward className="text-red-400" />
                        <span className="text-red-400 ml-1">3%</span>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-md flex flex-col" style={{ flex: '1 1 22%', minWidth: '0' }}>
                <div className="flex items-center justify-between mb-2">
                    <AttachMoney className="text-purple-400 bg-purple-400 bg-opacity-20 rounded-full p-2" style={{ fontSize: 40 }} />
                </div>
                <div className="text-lg font-medium text-left">Total Revenue</div>
                <div className="flex items-center justify-between mt-2">
                    <div className="text-3xl font-bold">$12k</div>
                    <div className="flex items-center">
                        <ArrowDownward className="text-red-400" />
                        <span className="text-red-400 ml-1">3%</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart