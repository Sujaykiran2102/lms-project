// components/layout/Footer.js
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-600">
          © {currentYear} LMS Platform. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}