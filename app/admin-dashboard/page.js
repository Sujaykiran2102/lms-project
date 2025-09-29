import DashboardPage from "@/components/pages/dashboard-page";

// The middleware protects this page, so no manual session check is needed here.
export default async function AdminDashboard() {
  return <DashboardPage />;
}