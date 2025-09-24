// app/dashboard/layout.js
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar for desktop, hidden on mobile */}
        <div className="hidden md:flex">
          <Sidebar />
        </div>
        {/* Main content */}
        <main className="flex-1 bg-gray-50 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}