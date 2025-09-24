// components/layout/Sidebar.js
import Link from 'next/link';
import { HomeIcon, BookOpenIcon, UserIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'My Courses', href: '/dashboard/courses', icon: BookOpenIcon },
  { name: 'Profile', href: '/dashboard/profile', icon: UserIcon },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold">Navigation</h2>
      </div>
      <nav className="flex-1 p-2 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700"
          >
            <item.icon className="h-6 w-6 mr-3" aria-hidden="true" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}