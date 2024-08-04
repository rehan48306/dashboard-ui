import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    // <div className="flex flex-col bg-gray-900 text-white min-h-screen">
    //   <div className="flex flex-grow">
    //     <Sidebar />
    //     <div className="flex flex-col flex-grow">
    //       <Header />
    //       <div className="flex-grow">
    //         <Dashboard />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="flex flex-grow pt-16">
        <Sidebar />
        <main className="flex flex-col flex-grow ml-16 pl-4 pt-4">
          <div className="flex-grow overflow-auto">
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
