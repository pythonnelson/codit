import React from "react";
import { ModeToggleBtn } from "./mode-toggle-btn";
import SelectLanguages from "./select-languages";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const EditorComponent = () => {
  return (
    <div className="min-h-screen dark:bg-slate-900 rounded-2xl shadow-2xl py-4 px-8">
      {/* ===== EDITOR HEADER ===== */}
      <div className="flex items-center justify-between pb-4">
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

      {/* ===== EDITOR ===== */}
      <div className="bg-slate-400 dark:bg-slate-950 p-3">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg border dark:bg-slate-900"
        >
          <ResizablePanel defaultSize={50} minSize={40}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={40}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>

          {/* <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel> */}
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default EditorComponent;
