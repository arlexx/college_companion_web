"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardHero from "@/components/Dashboard/DashboardHero";

const Dashboard = () => {
  const router = useRouter();
  return (
    <>
      <DashboardHero />
    </>
  );
};

export default Dashboard;
