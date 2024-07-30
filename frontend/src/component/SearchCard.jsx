import React from "react";

export default function SearchCard({ item }) {
  console.log(item);
  return (
    <>
      <div>
        <div className=" flex flex-col items-center">
          <div className="w-48 ">
            {/* image of the song */}
            <img
              className="rounded-xl mx-auto"
              src={item.album.images[0].url}
              alt="image"
            />
          </div>
          {/* song name */}
          <h3 className="font-bold mt-2">{item.name}</h3>
          {/* artist name */}
        </div>
        <p className="font-medium">Artist:{item.artists[0].name}</p>
        {/* audio controls */}
        <div className="flex justify-center">
          <audio src={item.preview_url} controls className="w-50"></audio>
        </div>
      </div>
    </>
  );
}
