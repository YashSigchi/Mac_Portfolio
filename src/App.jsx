import React, { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock } from "#components";
import { Resume, Safari, Terminal ,Finder, Text, Image, Contact} from "#windows";
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
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  );
};

export default App;