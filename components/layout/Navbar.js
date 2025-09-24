// components/layout/Navbar.js
import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/24/solid'; // We'll use an icon library

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-teal-600">
              LMS Platform
            </Link>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Jane Doe</span>
            <UserCircleIcon className="h-8 w-8 text-gray-500" />
          </div>
        </div>
      </div>
    </nav>
  );
}