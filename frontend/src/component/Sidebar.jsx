import React from "react";
import { House } from "lucide-react";
import { Compass } from "lucide-react";
import { SearchCheck } from "lucide-react";
import { FileMusic } from "lucide-react";
import { FileClock } from "lucide-react";
import { AudioLines } from "lucide-react";

export default function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <House />,
    },
    {
      id: 2,
      name: "About",
      icon: <Compass />,
    },
    // {
    //   id: 3,
    //   name: "Search",
    //   icon: <SearchCheck />,
    // },
  ];

  const sidebarItems2 = [
    {
      id: 1,
      name: "playlist",
      icon: <FileMusic />,
    },
    {
      id: 2,
      name: "History",
      icon: <FileClock />,
    },
    {
      id: 3,
      name: "Top song's",
      icon: <AudioLines />,
    },
  ];

  return (
    <>
      <div className="px-6 w-[15%] h-[91vh] ">
        {/* first-section */}
        <div className="space-y-3 items-center">
          {sidebarItems.map((item) => {
            return (
              <div
                key={item.key}
                className="flex items-center space-x-6 cursor-pointer hover:bg-gray-300 duration-300 rounded-xl p-1"
              >
                <div> {item.icon}</div>
                <span className="cursor-pointer text-xl">{item.name}</span>
              </div>
            );
          })}
        </div>
        <br />
        <hr />
        {/* second-section */}
        <div className="mt-4 space-y-3 items-center">
          <div>
            <h1 className="font-bold text-xl">Add to playlist</h1>
          </div>
          {sidebarItems2.map((item) => {
            return (
              <div
                key={item.key}
                className="flex items-center space-x-6 cursor-pointer hover:bg-gray-300 duration-300 rounded-xl p-1"
              >
                <div> {item.icon}</div>
                <span className="cursor-pointer text-xl">{item.name}</span>
              </div>
            );
          })}
        </div>
        <br />
        <hr />
      </div>
    </>
  );
}
