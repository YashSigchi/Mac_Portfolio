import React from 'react';

import { Mail, Search } from "lucide-react";

import WindowWrapper from "#hoc/WindowWrapper";
import WindowControlls from "#components/WindowControlls";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window";

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      {/* HEADER */}
      <div id="window-header">
        <WindowControlls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      {/* ✅ CONTENT (NO HEIGHT/FLEX DEPENDENCY) */}
      <div className="flex">
        
        {/* SIDEBAR */}
        <div className="sidebar">
          <h2>Photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* GALLERY */}
        <div className="gallery p-4">
          <ul className="grid grid-cols-3 gap-4">
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                className="cursor-pointer"
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: "Gallery image",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: img,
                  })
                }
              >
                <img
                  src={img}
                  alt={`Gallery image ${id}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
PhotosWindow.displayName = "Photos";

export default PhotosWindow;