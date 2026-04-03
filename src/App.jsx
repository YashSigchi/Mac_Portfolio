import React, { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock, Home } from "#components";
import { Resume, Safari, Terminal ,Finder, Text, Image, Contact, Photos} from "#windows";
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
      <Photos />
      <Finder />
      <Text />
      <Image />
      <Contact />
      

      <Home />
    </main>
  );
};

export default App;