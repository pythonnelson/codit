import EditorComponent from "@/components/editor-component";
import { ModeToggleBtn } from "@/components/mode-toggle-btn";
import React from "react";

const Home = () => {
  return (
    <div className="dark:bg-slate-800 bg-slate-300 p-8">
      <EditorComponent />
    </div>
  );
};

export default Home;
