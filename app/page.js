"use client"
import Image from "next/image";
import {useState} from 'react'
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SalesTrends from "./components/SalesTrends";
import { SalesOrders } from "./utils/Data";
import LastOrders from "./components/LastOrders";

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
      grouped: true
      // borderSkipped: true,
      // barThickness: "50"
    }]
  })
  return (
    <main className="flex">
      <Sidebar />
      <section className="w-full ml-20">
        <Navbar />
        <div className="flex gap-4 px-5 pt-6">
          <div className="w-[60%]">
            <div className="w-[100%] rounded-lg border shadow">
              <div className="mx-5 my-2">
                <SalesTrends chartData={salesData}/>
              </div>
            </div>
            <div className="border mt-5 rounded-lg px-5 py-4 shadow ">
              <div className="flex justify-between items-center">
                <h1>Last Orders</h1>
                <h1>See All</h1>
              </div>
              <LastOrders />
            </div>
          </div>
          <div className="border px-5">
          </div>
        </div>
      </section>
    </main>
  );
}
