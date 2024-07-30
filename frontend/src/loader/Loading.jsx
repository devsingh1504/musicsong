import React from "react";
import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div>
      <span className="flex items-center justify-center h-screen text-3xl">
        <Loader />
      </span>
    </div>
  );
}
