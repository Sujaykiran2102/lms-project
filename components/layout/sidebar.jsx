"use client";
import React from 'react';
import { signOut } from 'next-auth/react';
import toast from 'react-hot-toast';
import Link from 'next/link';

const Sidebar = ({ role }) => {
  const handleLogout = async () => {
    toast.loading('Logging out...');
    try {
      await signOut({ callbackUrl: '/signin', redirect: true });
      // signOut will handle the redirect, no need for toast.success
    } catch (error) {
      toast.error('Logout failed. Please try again.');
    }
  };

  const adminLinks = (
    <>
      <Link href="/admin-dashboard" className="text-blue-600 hover:text-blue-800">Admin Dashboard</Link>
      <Link href="/edit_lesson" className="text-blue-600 hover:text-blue-800">Edit Lessons</Link>
      <Link href="/manage_students" className="text-blue-600 hover:text-blue-800">Manage Users</Link>
    </>
  );

  const studentLinks = (
    <>
      <Link href="/student-dashboard" className="text-green-600 hover:text-green-800">Student Dashboard</Link>
      <Link href="/courses" className="text-green-600 hover:text-green-800">My Courses</Link>
      <Link href="/grades" className="text-green-600 hover:text-green-800">Grades</Link>
      <Link href="/profile" className="text-green-600 hover:text-green-800">Profile</Link>
    </>
  );

  return (
    <aside className="w-64 bg-gray-100 h-full p-4 hidden md:block border-r">
      <nav className="flex flex-col gap-4">
        {role === 'admin' ? adminLinks : studentLinks}
        <button
          onClick={handleLogout}
          className={`text-left ${role === 'admin' ? 'text-blue-600 hover:text-blue-800' : 'text-green-600 hover:text-green-800'}`}
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;