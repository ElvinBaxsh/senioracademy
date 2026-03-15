import { Badge } from "@/components/ui/badge";
import { Clock, BarChart2 } from "lucide-react";
import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
  lang: string;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      {course.badge && (
        <Badge variant="new">{course.badge}</Badge>
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{course.description}</p>
      </div>
      <div className="flex items-center gap-4 pt-2 border-t border-gray-50">
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <Clock className="w-3.5 h-3.5" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <BarChart2 className="w-3.5 h-3.5" />
          <span>{course.level}</span>
        </div>
      </div>
    </div>
  );
}
