import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "react-hot-toast"; // Import the Toaster

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LMS Project",
  description: "Learning Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          {/* Add the Toaster component here */}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}