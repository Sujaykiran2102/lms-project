// app/dashboard/page.js
import CourseCard from "@/components/CourseCard";
import Button from "@/components/ui/Button";

export default function DashboardPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Courses</h1>
        <Button variant="primary">New Course</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CourseCard 
          title="Introduction to Next.js"
          description="Learn the fundamentals of building modern web applications with Next.js."
        />
        <CourseCard 
          title="Mastering Tailwind CSS"
          description="A deep dive into utility-first CSS for rapid UI development."
        />
        <CourseCard 
          title="Full-Stack Development with MERN"
          description="Build and deploy a full-stack application."
        />
      </div>
    </div>
  );
}