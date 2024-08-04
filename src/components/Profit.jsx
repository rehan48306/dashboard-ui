import { ArrowUpward } from "@mui/icons-material"
import { CircularProgress } from "@mui/material"

const Profit = () => {
    return (
        <div className="flex-none p-4 bg-gray-800 rounded-lg shadow-md flex flex-col" style={{ flex: '0 0 30%' }}>
            <div className="text-lg mb-2">Net Profit</div>
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                    <div className="text-4xl font-bold mb-2">$6759.25</div>
                </div>
                <div className="relative flex items-center mr-8">
                    <CircularProgress
                        variant="determinate"
                        value={70}
                        size={80}
                        thickness={8}
                        sx={{
                            color: '#2196f3',
                        }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-light-green-400">
                        70%
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <ArrowUpward className="text-green-400" style={{ fontSize: 24 }} />
                    <span className="text-green-400 ml-1 text-lg">3%</span>
                </div>
                <div className="text-gray-400 text-sm mt-2">*The value here has been rounded off.</div>
            </div>
        </div>
    )
}
export default Profit