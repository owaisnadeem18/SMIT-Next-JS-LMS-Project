import { Button } from "@/components/ui/button";
import { CourseTable } from "@/components/ui/DataTables/CourseTable";
import { CourseDialog } from "@/components/ui/Dialogs/CourseModal";

import React from "react";

export default function Courses() {
  return (
    <>
      <div className="mt-10 container mx-auto flex items-center justify-between mb-6">
        <h2 className="text-4xl font-bold">Courses</h2>
        <CourseDialog />
      </div>
      <CourseTable />
    </>
  );
}
