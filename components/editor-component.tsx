"use client";

import React, { useEffect, useRef, useState } from "react";
import { ModeToggleBtn } from "./mode-toggle-btn";
import SelectLanguages from "./select-languages";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Play } from "lucide-react";

const EditorComponent = () => {
  const { theme } = useTheme();
  const [sourceCode, setSourceCode] = useState("");

  const editorRef = useRef(null);

  function handleEditDidMount(editor: any) {
    editorRef.current = editor;
    editor.focus();
  }

  function handleOnChange(value: string | undefined) {
    if (value) {
      setSourceCode(value);
    }
  }

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
      <div className="bg-slate-400 dark:bg-slate-950 p-3 rounded-2xl">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg border dark:bg-slate-900"
        >
          <ResizablePanel defaultSize={50} minSize={40}>
            <Editor
              theme={theme === "dark" ? "vs-dark" : "vs-light"}
              height="100vh"
              defaultLanguage="javascript"
              defaultValue="//Code your skill here"
              onMount={handleEditDidMount}
              value={sourceCode}
              onChange={handleOnChange}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={40}>
            {/* ===== TOP ===== */}
            <div className="p-2 space-y-4 bg-slate-400 dark:bg-slate-900 min-h-screen">
              <div className="flex items-center justify-between bg-slate-400 dark:bg-slate-950 px-3 py-2">
                <h2>Output</h2>
                {/* ===== RUN BUTTON ===== */}
                <Button size="sm" variant="custom">
                  <Play className="w-4 h-4 mr-1" />
                  <span>Run</span>
                </Button>
                {/* ===== RUN BUTTON ===== */}
              </div>
              {/* ===== BODY ===== */}
              <div className="px-6">
                <h2>Code output</h2>
              </div>
            </div>
            {/* ===== BOTTOM ===== */}
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
