import React from "react";
import { ModeToggleBtn } from "./mode-toggle-btn";
import SelectLanguages from "./select-languages";

const EditorComponent = () => {
  return (
    <div className="min-h-screen dark:bg-slate-900 rounded-2xl shadow-2xl py-4 px-8">
      {/* ===== EDITOR HEADER ===== */}
      <div className="flex items-center justify-between">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
          {"<Codit />"}
        </h2>
        <div className="flex items-center space-x-2">
          <ModeToggleBtn />
          <div className="w-[230px]">
            <SelectLanguages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorComponent;
