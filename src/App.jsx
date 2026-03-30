import React, { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock } from "#components";
import { Terminal } from "#windows";
import useWindowStore from "#store/window.js";

// ✅ register GSAP plugins
gsap.registerPlugin(Draggable);

const App = () => {
  const openWindow = useWindowStore((s) => s.openWindow);

  // ✅ open terminal on load
  useEffect(() => {
    openWindow("terminal");
  }, []);

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  );
};

export default App;