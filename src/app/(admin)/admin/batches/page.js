import { BatchTable } from "@/components/ui/DataTables/BatchTable";
import { BatchDialog } from "@/components/ui/Dialogs/BatchModal";
import React from "react";

export default function Batches() {
  return (
    <>
      <div className="mt-10 container mx-auto flex items-center justify-between mb-6">
        <h2 className="text-4xl font-bold">Batches</h2>
        <BatchDialog />
      </div>
      <BatchTable />
    </>
  );
}
