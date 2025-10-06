"use client";
import React from 'react';
import MainLayout from '../../components/layout/main-layout';
import Sidebar from '../../components/layout/Sidebar'
import Navbar from '../../components/layout/Navbar';
import Card from '../../components/global/card';
//added fixes

const StudentDashboardPage = () => {
  // The middleware protects this page, so we can assume a valid session exists.
  return (
    <MainLayout sidebar={<Sidebar role="student" />} navbar={<Navbar />}>
      <h1 className="text-3xl font-bold mb-6 text-black">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl text-black font-semibold mb-2">Welcome!</h2>
          <p className='text-black'>This is your student dashboard. Here you can find your enrolled courses, grades, and profile information.</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default StudentDashboardPage;