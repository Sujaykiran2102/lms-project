// app/login/page.js
import Navbar from "../../components/layout/Navbar";

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-10 p-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to Your Account</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"/>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"/>
            </div>
            <button type="submit" className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600">
              Log In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}