import { UserTrainerTable } from "@/components/ui/DataTables/UserTable";
import { UserTrainerModal } from "@/components/ui/Dialogs/UserTable";
import React from "react";

export default function Students() {
  return (
    <>
      <div className="mt-24 flex items-center  container mx-auto  justify-between text-4xl font-bold">
        Students
        <UserTrainerModal />
      </div>
      <div className=" container mx-auto ">
        <UserTrainerTable />
      </div>
    </>
  );
}
