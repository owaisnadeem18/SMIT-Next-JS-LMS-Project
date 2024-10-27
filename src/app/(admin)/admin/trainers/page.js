import { UserTrainerTable } from "@/components/ui/DataTables/UserTable";
import { UserTrainerModal } from "@/components/ui/Dialogs/UserTable";
import React from "react";

export default function Trainers() {
  return (
    <>
      <div className="mt-24 flex items-center justify-between  container mx-auto text-4xl font-bold">
        Trainers
        <UserTrainerModal />
      </div>
      <div className="container mx-auto">
        <UserTrainerTable />
      </div>
    </>
  );
}
