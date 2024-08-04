import Feedback from "./Feedback";
import RecentOrders from "./RecentOrders";
import ActivityChart from "./ActivityChart";
import Cart from "./Cart";
import Menu from "./Menu";
import Profit from "./Profit";

const Dashboard = () => {
    return (
        <>
            <div className="p-5 space-y-5">
                <div className="font-bold text-2xl pt-1 pb-1">Dashboard</div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 lg:flex-[7]">
                        <Cart />
                    </div>
                    <div className="flex-1 bg-gray-800 rounded-lg lg:flex-[3]">
                        <Profit />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 min-h-[290px]">
                    <div className="flex-1 lg:flex-[7]">
                        <ActivityChart />
                    </div>
                    <div className="flex-1 bg-gray-800 rounded-lg lg:flex-[3]">
                        <Menu />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 lg:flex-[7]">
                        <RecentOrders />
                    </div>
                    <div className="flex-1 lg:flex-[3]">
                        <Feedback />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;