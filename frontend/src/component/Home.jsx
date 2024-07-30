import React from "react";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video";
import { useAuth } from "../../context/AuthProvider.jsx";

export default function Home() {
  const { data } = useAuth();
  console.log(data);

  return (
    <>
      <div className="flex mt-16">
        <Sidebar />
        <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {data.map((item) => (
              <Video item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
