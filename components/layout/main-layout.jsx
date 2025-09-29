"use client"
import React from 'react';

const MainLayout = ({ children, sidebar, navbar, footer }) => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <header>
      {navbar}
    </header>
    <div className="flex flex-1 w-full">
      {/* The sidebar component is now directly passed and rendered */}
      {sidebar}
      <main className="flex-1 p-4 md:p-6 max-w-5xl mx-auto w-full">
        {children}
      </main>
    </div>
    {/* The footer component is now directly passed and rendered */}
    {footer}
  </div>
);

export default MainLayout;