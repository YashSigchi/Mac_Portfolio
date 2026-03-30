import React from "react";
import { Check, Flag } from "lucide-react";

import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { techStack } from "#constants";
import WindowControlls from "#components/WindowControlls.jsx";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@yash % </span>
          show tech stack
        </p>

        <div className="label flex gap-10">
          <p className="w-32 font-bold">Category</p>
          <p className="font-bold">Technologies</p>
        </div>

        <ul className="content mt-2 space-y-2">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-start gap-2">
              <Check size={18} />
              <h3 className="w-32">{category}</h3>
              <p>{items.join(", ")}</p>
            </li>
          ))}
        </ul>

        <div className="footnote mt-4 text-sm">
          <p className="flex items-center gap-2">
            <Check size={16} /> 5 of 5 stacks loaded successfully (100%)
          </p>

          <p className="flex items-center gap-2 text-black">
            <Flag size={14} fill="black" />
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;