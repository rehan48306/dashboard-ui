import React from "react";
import { AssignmentTurnedInOutlined, BarChartOutlined, ChecklistOutlined, GridViewOutlined, HomeOutlined, LogoutOutlined, VideoLibraryOutlined } from "@mui/icons-material";

const Sidebar = () => {
    return (
        <aside className="fixed top-0 left-0 bottom-0 bg-gray-800 w-20 z-10">
            <div className="w-20 bg-gray-800 flex flex-col items-center py-4 justify-between h-screen">
                <div className="flex flex-col items-center space-y-8">
                    <div className="pt-2 pb-3">
                        <GridViewOutlined className="text-blue-400" style={{ width: '2rem', height: '2rem' }} />
                    </div>
                    <div className="flex flex-col items-center space-y-6 text-gray-400">
                        <HomeOutlined className="text-blue-500" style={{ width: '1.5rem', height: '1.5rem' }} />
                        <BarChartOutlined style={{ width: '1.5rem', height: '1.5rem' }} />
                        <ChecklistOutlined style={{ width: '1.5rem', height: '1.5rem' }} />
                        <VideoLibraryOutlined style={{ width: '1.5rem', height: '1.5rem' }} />
                        <AssignmentTurnedInOutlined style={{ width: '1.5rem', height: '1.5rem' }} />
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-6 text-gray-400 mb-10">
                    <LogoutOutlined style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;