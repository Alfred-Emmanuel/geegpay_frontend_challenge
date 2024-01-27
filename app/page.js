"use client"
import {useState, useEffect} from 'react'
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SalesTrends from "./components/SalesTrends";
import { SalesOrders } from "./utils/Data";
import LastOrders from "./components/LastOrders";
import Performance from "./components/Performance";
import TopPlatform from './components/TopPlatform';
import Skeleton from 'react-loading-skeleton';

export default function Home() {
  const [salesData, setSalesData] = useState({
    labels: SalesOrders.map((data) => data.month),
    datasets: [{
      label: "Total Sales",
      data: SalesOrders.map((data) => data.totalSales),
      backgroundColor: ["#EBFAF6"],
      borderColor: "transparent",
      borderRadius: "50",
      hoverBackgroundColor: ["#63D7BA"],
      borderWidth: "30",
      barThickness: "40"
    }]
  })

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setLoading(false);
    };

    fetchData();
  }, []); 

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };


  return (
    <main className="flex mt-20 md:mt-0">
      <div className={`${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        } bg-black bg-opacity-50 w-full h-screen fixed z-20 transition-transform duration-300 ease-in-out md:hidden`} onClick={toggleSidebar }>
          <Sidebar />
      </div>
      <div className='hidden md:block'>
        <Sidebar />
      </div>
      <section className="w-full md:ml-20">
        <Navbar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible}/>
        <div className="block lg:flex gap-4 px-5 pt-6">
          <div className="w-full lg:w-[60%]">
            <div className="w-[100%] rounded-lg border border-gray-500 shadow">
              <div className="mx-5 my-2 overflow-x-auto md:overflow-x-hidden">
                {loading ? (
                  // Display skeleton while loading
                  <Skeleton height={390} />
                ) : ( 
                <SalesTrends chartData={salesData}/>

                 )}
              </div>
            </div>
            <div className='block mt-4 lg:hidden'>
              <Performance />
            </div>
            <div className="border border-gray-500 mt-5 rounded-lg px-5 py-4 shadow md:h-80 overflow-y-auto custom-scrollbar">
              <div className="flex justify-between items-center text-base">
                <h1 className="font-medium">Last Orders</h1>
                <h1 className="font-medium text-[#63D7BA] cursor-pointer" title="view all">See All</h1>
              </div>
              <LastOrders />
            </div>
          </div>
          <div className="w-full lg:w-[40%]">
            <div className='hidden lg:block'>
              <Performance />
            </div>
            <TopPlatform />
          </div>
        </div>
      </section>
    </main>
  );
}
